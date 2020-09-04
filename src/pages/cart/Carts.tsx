// pages/cart/Carts.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../store";

import {
  getCartsSelector,
  cartSummarySelector,
} from "../../store/cart/CartSelectors";

import { Cart } from "./Cart";

import { fetchCommercialOffersRequest } from "../../store/book/BookActions";

export const Carts: React.FC = () => {
  const dispatch = useDispatch();

  const carts = useSelector((state: IApplicationState) =>
    getCartsSelector(state)
  );

  const cartSummary = useSelector((state: IApplicationState) =>
    cartSummarySelector(state)
  );

  React.useEffect(() => {
    const ids = carts?.map((x) => x.id).join(",");

    if (ids) {
      dispatch(fetchCommercialOffersRequest(ids));
    }
  }, [carts, dispatch]);

  const renderCarts = () => {
    if (!carts || carts?.length === 0) {
      return "Cart is empty";
    }

    return (
      <>
        <div className="card">
          <table className="table table-hover shopping-cart-wrap">
            <thead className="text-muted">
              <tr>
                <th scope="col">Product</th>

                <th scope="col" style={{ width: "120px" }}>
                  Quantity
                </th>

                <th scope="col" style={{ width: "120px" }}>
                  Price
                </th>

                <th
                  scope="col"
                  style={{ width: "120px" }}
                  className="text-right"
                >
                  Action
                </th>
              </tr>
            </thead>

            {carts.map((item, index) => {
              return (
                <React.Fragment key={`${item.id}_${index}`}>
                  <Cart data={item} />
                </React.Fragment>
              );
            })}
          </table>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary{" "}
            </div>

            <div className="p-4">
              <p className="font-italic mb-4">
                Total is calculated based on the best commercial offer.
              </p>

              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>

                  <strong>{cartSummary?.orderSubTotal} €</strong>
                </li>

                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Commercial offers</strong>

                  <strong>{cartSummary?.offerValue} €</strong>
                </li>

                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>

                  <h5 className="font-weight-bold">
                    {cartSummary?.totalOrder} €
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cart</h1>
      </div>

      {renderCarts()}
    </>
  );
};
