import styles from "@/styles/topbar.module.css";


export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <span className={styles.text}>
          PROMETEX Myanmar Solar Panel & Electronic
        </span>
        <div>
        <span>To check your Products</span>

        <button className={styles.button}>
          Check Here →
        </button>

        </div>
      </div>
    </div>
  );
}