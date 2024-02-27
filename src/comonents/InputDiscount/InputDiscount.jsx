import { useForm } from "react-hook-form";
import flowers from "./assest/flowers.svg";
import styles from "./inputDiscount.module.css";
import { phoneValidation, emailValidation, nameValidation } from "../../utils/validation";
import ValidationError from "../Error";
import { useDispatch } from "react-redux";
import { salePost } from "../../store/allSlices/salePost";

function InputDiscount() {
  const dispatch = useDispatch()
  const getDataFromInputs = (data) => {
    dispatch(salePost(data))
    reset();
  }
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({
    mode: "all",
  });
  return (
    <section className={styles.section}>
      <h2 className={styles.text_h2}>5% off on the first order</h2>
      <div className={styles.all_elements}>
        <img className={styles.image} src={flowers} alt="flowers" />
        <form onSubmit={handleSubmit(getDataFromInputs)} className={styles.all_inputs}>
          <input
            {...register("name", nameValidation)}
            placeholder="Name"
            className={styles.input}
            type="text"
          />
          <ValidationError keyName={errors.name} message={errors?.name?.message} />
          <input
            {...register("numberPhone", phoneValidation)}
            placeholder="Phone number"
            className={styles.input}
            type="number"
          />
          <ValidationError keyName={errors.numberPhone} message={errors?.numberPhone?.message} />
          <input
            {...register("email", emailValidation)}
            placeholder="Email"
            className={styles.input}
            type="text"
          />
          <ValidationError keyName={errors.email} message={errors?.email?.message} />
          <input
            type="submit"
            className={styles.submit}
            value={"Get a discount"}
          />
        </form>
      </div>
    </section>
  );
}
export default InputDiscount;