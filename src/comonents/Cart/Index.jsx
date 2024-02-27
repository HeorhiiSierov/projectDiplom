import { useSelector } from "react-redux";
import CartItem from "../CartItem/Index";
import styles from "./styles.module.css"
import { useEffect } from "react";

function Cart() {
  const cartState = useSelector((state) => state.cart)

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(cartState))
  }, [cartState])

  return (
    <div className={styles.elements}>
      {cartState?.map((elem) => <CartItem key={elem.id} {...elem} />)}
    </div>
  )
}

export default Cart;