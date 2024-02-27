import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./styles.module.css";
import { addItemCart } from "../../store/allSlices/cartSlice";
import { countPlus } from "../../store/allSlices/cartSlice";
import { Link } from "react-router-dom";

function SingleItem({ id, title, price, discont_price, description, image }) {
  const [localCount, setLocalCount] = useState(1);
  const cartList = useSelector((state) => state.cart);
  const addToCart = () => {
    const productInCart = cartList.find((elem) => elem.id === id);
    if (productInCart) {
      dispatch(countPlus({ id, count: localCount }));
    } else {
      dispatch(
        addItemCart({
          id,
          title,
          price,
          discont_price,
          description,
          image,
          count: localCount,
        })
      );
    }
  };

  const dispatch = useDispatch();
  const increment = () => {
    setLocalCount((currentCount) => currentCount + 1);
  };
  const decrementCount = () => {
    setLocalCount((currentCount) =>
      currentCount > 1 ? currentCount - 1 : currentCount
    );
  };
  return (
    <div>
      <div className={styles.btnLine}>
        <Link className={styles.link} to={"/"}>
          <button className={styles.btnMain}>Main page</button>
        </Link>
        <span className={styles.line}></span>
        <Link className={styles.link} to={"/categories"}>
          <button className={styles.btnCategories}>Categories</button>
        </Link>
        <span className={styles.line}></span>
        <Link className={styles.link} to={"/sale"}>
          <button className={styles.btnDiscount}>Discount items</button>
        </Link>
        <span className={styles.line}></span>
        <Link className={styles.link} to={"/products"}>
          <button className={styles.btnProducts}>{title}</button>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.images}>
          <img src={`http://localhost:3333${image}`} alt="image" />
        </div>
        <div className={styles.txt}>
          <p className={styles.txt_title}>{title}</p>
          <div className={styles.txt_allPrice}>
            <p
              className={
                discont_price === null
                  ? styles.prise_sale_none
                  : styles.prise_sale
              }
            >
              {`$${discont_price}`}
            </p>
            <p
              className={
                discont_price === null
                  ? styles.prise_sale
                  : styles.prise_default
              }
            >
              {`$${price}`}
            </p>
            <p
              className={
                discont_price === null ? styles.priceSaleNon : styles.d_price
              }
            >
              {"-" + Math.floor(((price - discont_price) / price) * 100) + "%"}
            </p>
          </div>
          <div className={styles.quantity_addToCart}>
            <div className={styles.quantity}>
              <button className={styles.btn_minus} onClick={decrementCount}>
                -
              </button>
              <h4 className={styles.localCount}>{localCount}</h4>
              <button className={styles.btn_plus} onClick={increment}>
                +
              </button>
            </div>
            <button className={styles.btn_addToCart} onClick={addToCart}>
              Add to Cart
            </button>
          </div>
          <p className={styles.name_description}>Description</p>
          <p className={styles.txt_description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default SingleItem;
