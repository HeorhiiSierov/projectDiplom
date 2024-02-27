import Products from "../../comonents/Products/Index";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../store/allSlices/allProductsSlice";
import { useEffect } from "react";
import SortForm from "../../comonents/FilterForms/SortForm";
import SaleForm from "../../comonents/FilterForms/SaleForm";
import FilterForm from "../../comonents/FilterForms/FilterForm";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function AllProductsPage() {
  const dispatch = useDispatch();
  const allproducsts = useSelector((state) => state.products.list);
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.btns}>
        <Link to={"/"} className={styles.link}>
          <button className={styles.btnMain}>Main page</button>
        </Link>
        <span className={styles.span}></span>
        <Link to={"/categories"} className={styles.link}>
          <button className={styles.btnCategories}>Categories</button>
        </Link>
        <span className={styles.span}></span>
        <Link to={"/sale"} className={styles.link}>
          <button className={styles.btnAllSales}>All Products</button>
        </Link>
      </div>
      <h1 className={styles.text_H1}>All products</h1>
      <div className={styles.forms}>
        <FilterForm />
        <SaleForm />
        <SortForm />
      </div>
      <Products products={allproducsts} />
    </div>
  );
}
export default AllProductsPage;
