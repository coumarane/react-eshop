// pages/product/Product.tsx
import * as React from "react";
import { useDispatch } from "react-redux";
import { IBook } from "../../store/book/BookTypes";
import { addCartRequest } from "../../store/cart/CartActions";
import { ToastifyInfo } from "../../lib/toastify";

interface IOwnProps {
  data: IBook;
}

export const Product: React.FC<IOwnProps> = (props: IOwnProps) => {
  const dispatch = useDispatch();

  const { data } = props;

  const handleAddCart = (item: IBook) => (e: React.MouseEvent) => {
    dispatch(addCartRequest(item));

    ToastifyInfo(`Item [${item.title}] is added in your cart`);
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={data.cover}
            alt={data.title}
            width="250px"
            height="400px"
          />

          <div className="text-center">ISBN: {data.isbn}</div>

          <div className="card-body">
            <h5 className="card-title">Price: {data.price}€</h5>

            <h5 className="card-title">{data.title}</h5>

            <div
              className="card-text"
              style={{ height: "300px", overflow: "auto" }}
            >
              <ul className="list-group list-group-flush">
                {data.synopsis.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="list-group-item">{item}</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>

            <p className="card-text">
              <button className="btn btn-primary" onClick={handleAddCart(data)}>
                Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
