"use client";
import Image from "next/image";
import styles from "@/styles/footer.module.css";
import { FaCopyright, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerTop}>

        <div className={styles.column}>
          <h4>Customer Care</h4>
          <p>Contact Us</p>
        </div>

        <div className={styles.column}>
          <h4>Products</h4>
          <p>Solar Panel</p>
          <p>Battery</p>
          <p>Inverter</p>
          <p>Accessories</p>
        </div>

        <div className={styles.column}>
          <h4>Prometex</h4>
          <p>About</p>
          <p>News</p>
          <p>Store Location</p>
          <p>Delivery Methods</p>
        </div>

        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <FaFacebookF />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className={styles.footerLogo}>
        <Image
          src="/img/logo.png"
          alt="Prometex"
          width={900}
          height={120}
        />
      </div>

      <div className={styles.copy}>
      <p><MdOutlineCopyright/>2026 PROMETEX Myanmar. Designs By O-Technique International Myanmar</p>
      </div>

    </footer>
  );
}