import { useEffect, useState } from "react";
import s from "./style.module.css";
import { filterPrice } from "../../../store/allSlices/allProductsSlice";
import { useDispatch } from "react-redux";
import { filterPriceCat } from "../../../store/allSlices/productsByCategory";

function FilterForm() {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

    const handleChange = (min, max) => {
    dispatch(filterPrice({ minPrice: min, maxPrice: max }));
    dispatch(filterPriceCat({ minPrice: min, maxPrice: max }))
  };
  let handleMinChange = (e) => {
    let value = +e.target.value || 0;
    if (value < 0) {
      value = 0;
    }
    setMinPrice(value);
    handleChange(value, maxPrice);
  };
  const handleMaxChange = (e) => {
    let value = +e.target.value || Infinity;
    if (value < 0) {
      value = 0;
    }
    setMaxPrice(value);
    handleChange(minPrice, value);
  };

  return (
    <div className={s.inputs}>
    <p className={s.priceText}>Price</p>
    <div className={s.inputForm}>
      <input
        value={minPrice === 0 ? "" : minPrice}
        onChange={handleMinChange}
        className={s.price}
        type="number"
        placeholder="from"
      />
      <input
        value={maxPrice === Infinity || maxPrice === 0 ? "" : maxPrice}
        onChange={handleMaxChange}
        className={s.price}
        type="number"
        placeholder="to"
      />
      </div>
    </div>
  );
}

export default FilterForm;
