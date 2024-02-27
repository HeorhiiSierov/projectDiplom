import styles from "./styles.module.css";
import notFound from "../../assest/img/notFound.svg";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className={styles.notFound}>
        <h2 className={styles.h4}>4</h2>
        <img src={notFound} alt="notFound" />
        <h2 className={styles.h4}>4</h2>
      </div>
      <div className={styles.textNotFound}>
        <h2 className={styles.text_h2}>Page Not Found</h2>
        <p className={styles.paragraph}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <Link className={styles.link} to={'/'}>
          <button className={styles.btn}>
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
}
export default NotFoundPage;
