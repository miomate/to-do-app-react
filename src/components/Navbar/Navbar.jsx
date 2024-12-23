import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navcontainer}>
          <div className={styles.logoContainer}>
            <a href="./">
              <img
                className={styles.logo}
                src="./src/assets/img/logo2.png"
                alt="Logo"
              />
            </a>
            <a href="./">
              <h1 className={styles.title}>To Do App</h1>
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className={styles.navbuttons}>
            <Link to="/">
              <button className={styles.nvbtn} type="button">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className={styles.nvbtn} type="button">
                About
              </button>
            </Link>
            <Link to="*">
              <button className={styles.nvbtn} type="button">
                404
              </button>
            </Link>
            <button className={styles.nvbtn} type="button">
              4
            </button>
          </div>

          <button className={styles.nvlog} type="button">
            <i className="material-icons">person</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
