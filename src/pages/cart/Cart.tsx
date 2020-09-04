// pages/cart/Cart.tsx
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useDispatch } from "react-redux";
import { ICart } from "../../store/cart/CartTypes";
import { removeCartRequest } from "../../store/cart/CartActions";

interface IOwnProps {
  data: ICart;
}

export const Cart: React.FC<IOwnProps> = (props: IOwnProps) => {
  const dispatch = useDispatch();
  const { item } = props.data;

  const handleInputChange = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    // const fieldName = (e.target as any).name;

    // const fieldValue = (e.target as any).value;
  };

  const handleRemoveCart = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(removeCartRequest(id));
  };

  return (
    <>
      <tbody>
        <tr>
          <td>
            <figure className="media">
              <div className="img-wrap">
                <img
                  src={item.cover}
                  className="img-thumbnail img-sm"
                  width="140"
                  height="200"
                />
              </div>

              <figcaption className="media-body">
                <h6 className="title text-truncate">{item.title} </h6>

                <dl className="param param-inline small">
                  <dt>ISBN: </dt>

                  <dd>{item.isbn}</dd>
                </dl>
              </figcaption>
            </figure>
          </td>

          <td>
            <input
              type="number"
              className="form-control"
              id="quantity"
              aria-describedby="quantity"
              value={props.data.quantity}
              readOnly
              onChange={handleInputChange}
            />
          </td>

          <td>
            <div className="price-wrap">
              <var className="price">EUR {item.price}</var>
            </div>
          </td>

          <td className="text-right">
            <button
              className="btn btn-outline-danger btn-round"
              onClick={handleRemoveCart(item.isbn)}
            >
              x Remove
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
