import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "../../store/allSlices/allProductsSlice";
import SortForm from "../../comonents/FilterForms/SortForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function AllSalesPage() {
  const allSalesProduct = useSelector((state) => state.products.list);
  const products = allSalesProduct.filter((elem) => {
    return elem.discont_price;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <>
      <div className={styles.formsElements}>
        <div className={styles.btns}>
          <Link className={styles.link} to={"/"}>
            <button className={styles.btnMain}>Main Page</button>
          </Link>
          <span className={styles.line}></span>
          <Link className={styles.link} to={"/products"}>
            <button className={styles.btnAllProducts}>All Products</button>
          </Link>
        </div>
        <h1>Discounted items</h1>
        <div className={styles.forms}>
          <FilterForm />
          <SortForm />
        </div>
      </div>
      <Products products={products} />
    </>
  );
}

export default AllSalesPage;
