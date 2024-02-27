import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Categories2 from "../../comonents/Categories/Categories 2";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/allSlices/categoriesSlice";
import { useEffect } from "react";

function PagesCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesList);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <div className={styles.btns}>
        <Link className={styles.link} to={"/"}>
          <button className={styles.btnMain}>Main page</button>
        </Link>
        <span className={styles.span}></span>
        <Link className={styles.link} to={"/products"}>
          <button className={styles.btnAllProduct}>All categories</button>
        </Link>
      </div>
      <h1 className={styles.text_h1}>Categories</h1>
      <div className={styles.sectionBlock}>
        {categories.map((elem) => (
          <div
            className={styles.imgList}
            key={elem.id}
            style={{
              backgroundImage: `url(http://localhost:3333${elem.image})`,
              backgroundSize: "cover",
            }}
          >
            <Link className={styles.link} to={`/categories/${elem.id}`}>
              <p className={styles.textTitle}>{elem.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default PagesCategories;
