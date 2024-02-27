import { NavLink } from "react-router-dom";
import styles from "./CategoriesItem.module.css";

function CategoriesItem() {
  return (
    <div className={styles.ItemsCategories}>
      <span className={styles.line}></span>
      <NavLink to={"/categories"}>
        <button className={styles.btnCategories}>All categories</button>
      </NavLink>
    </div>
  );
}

export default CategoriesItem;
