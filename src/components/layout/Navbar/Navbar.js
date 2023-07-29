import React from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/">
        {" "}
        <img
          className={styles.navbar_logo}
          alt="img"
          src="./images/loogo.jpg"
        ></img>
      </a>
      <ul className={styles.menuList}>
        <li>
          <a href="/" className={styles.menu_link}>
            Build with us
          </a>
        </li>

        <li>
          <a href="/" className={styles.menu_link}>
            Renovate with us
          </a>
        </li>

        <li>
          <a href="/" className={styles.menu_link}>
            About us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
