import SingleItem from "../../comonents/SingleItem/SingleItem"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductId } from '../../store/allSlices/singleItemSlice'
import { useSelector } from "react-redux";
function SingleProductsPage() {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductId(product_id));
  }, [dispatch, product_id]);
  const productIdList = useSelector((state) => state.product?.list)
  return (
    <>
      <SingleItem key={productIdList.id} {...productIdList} />
    </>
  )
}
export default SingleProductsPage