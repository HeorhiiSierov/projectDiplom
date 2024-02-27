import logo from "../../assest/img/logo.svg";
import card from "../../assest/img/card.svg";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function Header() {
  const sumCunt = useSelector((state) => state.cart);
  const linkActive = ({ isActive }) =>
    isActive ? styles.link : styles.link_default;

  return (
    <header className={styles.header}>
      <NavLink className={linkActive} to="/">
        {" "}
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={styles.paragraph}>
        <NavLink className={linkActive} to="/">
          <p className={styles.paragraph}>Main Page</p>
        </NavLink>
        <NavLink className={linkActive} to="/categories">
          <p className={styles.paragraph}>Categories</p>
        </NavLink>

        <NavLink className={linkActive} to="/products">
          <p className={styles.paragraph}>All products</p>
        </NavLink>

        <NavLink className={linkActive} to="/sale">
          <p className={styles.paragraph}>All sales</p>
        </NavLink>
      </div>
      <NavLink to="/cart" className={styles.link}>
        <div>
          {sumCunt.length === 0 ? (
            <p style={{ display: "none" }} className={styles.countNone}></p>
          ) : (
            <p style={{ display: "block" }} className={styles.count}>
              {sumCunt.length}
            </p>
          )}
        </div>
        <img className={styles.logo} src={card} alt="card" />
      </NavLink>
    </header>
  );
}

export default Header;
