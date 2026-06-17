"use client";

import React, { useState } from "react";
import ProductCard, { Product } from "../ProductCard/ProductCard";
import styles from "./SolarPanelList.module.css";

const dummyData: Product[] = [
  {
    id: 1,
    name: "PX590NH144 MONO • BIFACIAL",
    specs: "30mm • 35mm 590W",
    description:
      "The 'next generation N-type TOPCon cell' achieves higher power...",
    price: "1,000,000 mmk",
    status: "promotion",
    image: "/img/solar.png",
  },
  {
    id: 2,
    name: "PX590NH144 MONO • BIFACIAL",
    specs: "30mm • 35mm 590W",
    description:
      "The 'next generation N-type TOPCon cell' achieves higher power...",
    price: "1,000,000 mmk",
    status: "new",
    image: "/img/solar.png",
  },
  {
    id: 3,
    name: "PX590NH144 MONO • BIFACIAL",
    specs: "30mm • 35mm 590W",
    description:
      "The 'next generation N-type TOPCon cell' achieves higher power...",
    price: "1,000,000 mmk",
    status: "out-of-stock",
    image: "/img/solar.png",
  },
];

export default function SolarPanelList() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const displayedProducts = showInStockOnly
    ? dummyData.filter((product) => product.status !== "out-of-stock")
    : dummyData;

  return (
    <section className={styles.section}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Solar Panels</h1>
        <div className={styles.controls}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => setShowInStockOnly(e.target.checked)}
            />
            <span className={styles.slider}></span>
            in stock
          </label>
          <button className={styles.iconBtn}>filter</button>
          <button className={styles.iconBtn}>sort</button>
        </div>
      </header>

      {/* Dynamic Item Count */}
      <p className={styles.itemCount}>
        Showing {displayedProducts.length} from {dummyData.length} Items
      </p>

      {/* Product Grid */}
      <div className={styles.grid}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
