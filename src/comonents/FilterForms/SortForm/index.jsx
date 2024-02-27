
import styles from './styles.module.css'
import { sortProducts } from '../../../store/allSlices/allProductsSlice';
import { useDispatch } from 'react-redux';
import { sortProductsCat } from '../../../store/allSlices/productsByCategory';

function SortForm() {
  const dispatch = useDispatch()
  const sortFunction = (e) => {
    dispatch(sortProducts(e.target.value))
    dispatch(sortProductsCat(e.target.value))
  }

  return (
    <div className={styles.sortForm}>
      <h5 className={styles.sorted}>Sorted</h5>
      <select
        onChange={sortFunction}
        className={styles.select_sort}
        name="products_select"
      >
        <option value="default">by default</option>
        <option value="low-high">Price (Low to High)</option>
        <option value="high-low">Price (High to Low)</option>
        <option value="titleAsc">Title (A to Z)</option>
        <option value="titleDesc">Title (Z to A)</option>
      </select>
    </div>
  )
}

export default SortForm;