import { Link } from "react-scroll";

import styles from "./main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.img}>
        <div className={styles.text_h1}>
          <h1 className={styles.h1}>Amazing Discounts on Garden Products!</h1>
          <Link
            className={styles.link}
            to={"scrole"}
            smooth={true}
            duration={800}
          >
            <button className={styles.btn}>Check out</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
