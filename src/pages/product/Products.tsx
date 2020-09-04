// pages/product/Products.tsx
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../store";
import LoadingMessage from "../../components/LoadingMessage";
import ErrorMessage from "../../components/ErrorMessage";
import { Product } from "./Product";
import { searchBooksRequest } from "../../store/book/BookActions";
import "../../assets/styles/product.scss";

export const Products: React.FC = () => {
  const dispatch = useDispatch();

  const { error, loading, datas } = useSelector(
    (state: IApplicationState) => state.bookState.books
  );

  const [search, setSearch] = React.useState("");

  if (loading) {
    return (
      <>
        <LoadingMessage />
      </>
    );
  }

  const handleInputChange = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    // const fieldName = (e.target as any).name;

    const fieldValue = (e.target as any).value;

    setSearch(fieldValue);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      e.stopPropagation();

      doSearch();
    }
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    doSearch();
  };

  const doSearch = () => {
    dispatch(searchBooksRequest(search));
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
      </div>

      <div className="row">
        <div className="input-group col-md-12">
          <input
            type="text"
            className="  search-query form-control"
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleSearchKeyDown}
          />

          <span className="input-group-btn">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleSearch}
            >
              <span className="fa fa-search"></span>
            </button>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">{` `}</div>
      </div>

      <div className="products-content">
        {error && !datas && <ErrorMessage error={error} />}

        <div className="row">
          {datas &&
            datas.length > 0 &&
            datas.map((item, index) => {
              return (
                <React.Fragment key={item.isbn}>
                  <Product data={item} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};
