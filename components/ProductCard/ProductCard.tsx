import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  specs: string;
  description: string;
  price: string;
  status: "promotion" | "new" | "out-of-stock" | "none";
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.status !== "none" && (
          <span className={`${styles.badge} ${styles[product.status]}`}>
            {product.status === "out-of-stock"
              ? "Out of Stock"
              : product.status === "promotion"
              ? "Promotion"
              : "New Arrival"}
          </span>
        )}
        {/* Placeholder for the Solar Panel Image */}
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt={product.name}
            width={200} // အသေပေးကြည့်ပါ
            height={200} // အသေပေးကြည့်ပါ
            className={styles.productImg}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <h4 className={styles.specs}>{product.specs}</h4>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          <button className={styles.wishlistBtn} aria-label="Add to wishlist">
            ♡
          </button>
        </div>

        {product.status === "out-of-stock" ? (
          <button className={styles.notifyBtn}>
            <span className={styles.icon}>🔔</span> Notify
          </button>
        ) : (
          <button className={styles.addBtn}>
            <span className={styles.icon}>🛒</span> Add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
