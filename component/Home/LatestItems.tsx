"use client";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import { Button } from "../UI/Button";
import { ArrowRightLongIcon } from "../Icon/ArrowRightLongIcon";
import itemImg from "../../public/img/solar.png";

export default function LatestItems() {
  return (
    <div className={styles.bestSellingItems}>
      <h2 className={styles.itemTitle}>Latest Items</h2>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <div>
          <Image
            src={itemImg}
            width={260}
            height={500}
            alt="Solar"
            className={styles.itemImg}
          />
          <h3 className={styles.itemName}>
            PX590NH144 MONO・BIFACIAL 30mm・35mm 590W
          </h3>
          <p>
            The “next generation N-type TOPCon cell” achieves higher power
            generation performance even in low-light and high-temperature
            environments compared to conventional P-type cells.{" "}
          </p>
          <p className={styles.itemPrice}>1,000,000 mmk</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Button variant="primary">
              Shop Now
              <ArrowRightLongIcon />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={itemImg}
            width={260}
            height={500}
            alt="Solar"
            className={styles.itemImg}
          />
          <h3 className={styles.itemName}>
            PX590NH144 MONO・BIFACIAL 30mm・35mm 590W
          </h3>
          <p>
            The “next generation N-type TOPCon cell” achieves higher power
            generation performance even in low-light and high-temperature
            environments compared to conventional P-type cells.{" "}
          </p>
          <p className={styles.itemPrice}>1,000,000 mmk</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Button variant="primary">
              Shop Now
              <ArrowRightLongIcon />
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={itemImg}
            width={260}
            height={500}
            alt="Solar"
            className={styles.itemImg}
          />
          <h3 className={styles.itemName}>
            PX590NH144 MONO・BIFACIAL 30mm・35mm 590W
          </h3>
          <p>
            The “next generation N-type TOPCon cell” achieves higher power
            generation performance even in low-light and high-temperature
            environments compared to conventional P-type cells.{" "}
          </p>
          <p className={styles.itemPrice}>1,000,000 mmk</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Button variant="primary">
              Shop Now
              <ArrowRightLongIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
