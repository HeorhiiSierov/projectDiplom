import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./style.module.css";
import { discountProducts } from "../../../store/allSlices/allProductsSlice";
import { discountProductsCat } from "../../../store/allSlices/productsByCategory";
function SaleForm() {
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState(false);
  const changeState = () => {
    setCheckBox(!checkBox);
  };
    const sale = (e) => {
    dispatch(discountProducts(e.target.checked));
    dispatch(discountProductsCat(e.target.checked));
  };

  return (
    <div className={style.checkBox}>
      <h5 className={style.text}>Discounted items</h5>
      <input
        className={style.check}
        onChange={changeState}
        onClick={sale}
        checked={checkBox}
        type="checkbox"
      />
    </div>
  );
}
export default SaleForm;