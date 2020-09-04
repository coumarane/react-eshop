// store/cart/CartSelectors.ts
import { IApplicationState } from "..";
import { ICartSummary } from "./CartTypes";

export const getCartCountSelector = (state: IApplicationState) => {
  const { carts } = state.cartState;
  let count = 0;
  if (carts.datas && carts.datas.length > 0) {
    count = carts.datas.length;
  }
  return count;
};

export const getCartsSelector = (state: IApplicationState) => {
  const { carts } = state.cartState;
  return carts.datas;
};

/**
 * Return best offer
 * @param state Application state
 */
export const cartSummarySelector = (
  state: IApplicationState
): ICartSummary | undefined => {
  const { commercialOffers } = state.bookState;

  const { carts } = state.cartState;

  let offers: ICartSummary[] = [];

  let total = 0;

  if (
    commercialOffers.datas &&
    commercialOffers.datas.length > 0 &&
    carts &&
    carts.datas &&
    carts.datas.length > 0
  ) {
    const orderTotal = carts.datas.reduce((a, b) => a + b.item.price, 0);

    commercialOffers.datas.forEach((item, index) => {
      switch (item.type) {
        case "percentage":
          total = orderTotal - orderTotal * (item.value / 100);
          break;
        case "minus":
          total = orderTotal - item.value;
          break;
        case "slice":
          total =
            orderTotal >= +item.sliceValue!
              ? orderTotal - item.value
              : orderTotal;
          break;
        default:
          total = orderTotal;
          break;
      }

      offers.push({
        offerType: item.type,
        offerValue: item.value,
        orderSubTotal: orderTotal,
        totalOrder: total,
      });
    });
  }

  if (offers.length > 0) {
    offers.sort((a, b) => a.totalOrder - b.totalOrder);
    const offer = offers[0];
    return offer;
  }

  return undefined;
};
