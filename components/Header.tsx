import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import { FaSearch, FaUser, FaShoppingCart, FaMapMarkerAlt, FaGlobe, FaChevronDown, FaMoon, FaSun,  } from "react-icons/fa";

function Header() {
  const [showLang, setShowLang] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <div className={styles.taskbar}>

          <div className={styles.logo}>
            <Image
              src="/img/logo.png"
              alt="Prometex Logo"
              width={450}
              height={50}
              priority
            />
          </div>
          
          <div className={styles.searchBox}>
            <input type="text" placeholder="I am looking for" />
            <FaSearch className={styles.searchIcon} />
          </div>

          <div className={styles.tasks}>
          
          <div className={styles.actions}>         
            <div className={styles.actionItem}>
              <FaUser />
              <span>Sign In</span>
            </div>
            <div className={styles.cart}>
              <FaShoppingCart />
              <span className={styles.cartDot}></span>
            </div>
            </div>

            <div className={styles.actionItem}>
              <FaMapMarkerAlt />
              <span> Select Store</span>
            </div>

            <div
              className={styles.dropdown}
              onClick={() => setShowLang(!showLang)}>
              <FaGlobe />
              <span>EN</span>
              <FaChevronDown className={styles.arrow} />

              {showLang && (
                <div className={styles.dropdownMenu}>
                  <p>English</p>
                  <p>Myanmar</p>
                </div>
              )}
            </div>

            <div
              className={styles.dropdown}
              onClick={() => setShowTheme(!showTheme)}
            >
              <FaMoon />
              <FaChevronDown className={styles.arrow} />

              {showTheme && (
                <div className={styles.dropdownMenu}>
                  <p><FaSun /> Light Mode</p>
                  <p><FaMoon /> Dark Mode</p>
                </div>
              )}
            </div>

            </div>


        </div>
      </nav>

      <ul className={styles.navLinks}>
        <li><a href="#">Products</a></li>
        <li><a href="#">Promotions</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Store Locations</a></li>
      </ul>

    </header>
  );
}

export default Header;