/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProducts } from "./productSlice";
import Card from "../../components/Card/Card";
import useApi from "../../hooks/useApi";

function Products() {
  const { loader, data, error, refetch } = useApi("https://dummyjson.com/products");

  const productsInfo = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Products mounted")
  }, [])

  useEffect(() => {
      dispatch(
        updateProducts({
          productsInfo: data,
        })
      );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const products = productsInfo.products || [];
  return (
    <>
      {loader && "Loading products...."}
      {error}
      <button onClick={refetch} >refresh</button>
      <div className="products">
        {products.map((product) => (
          <Card key={product.id}>
            <img
              className="productImage"
              src={product.thumbnail}
              alt="product image"
            />
            <div>
              <b>Title:</b> {product.title}
            </div>
            <div className="productDescription">
              <b>Description:</b> {product.description}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Products;
