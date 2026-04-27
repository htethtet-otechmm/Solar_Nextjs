import React from "react";
import styles from "./ProductHeader.module.css"; 

export default function ProductHeader() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <h1>Solar Panels</h1>
        <div className={styles.controls}>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
            in stock
          </label>
          <button className={styles.iconBtn}>filter</button>
          <button className={styles.iconBtn}>sort</button>
        </div>
      </header>
      <p className={styles.itemCount}>Product 1 - 6 from 50 Items</p>
    </div>
  );
}
