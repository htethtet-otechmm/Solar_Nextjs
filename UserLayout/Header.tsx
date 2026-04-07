"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import { FaSearch, FaUser, FaShoppingCart, FaMapMarkerAlt, FaGlobe, FaChevronDown, FaMoon, FaSun, FaLanguage,  } from "react-icons/fa";
import { TbExplicit } from "react-icons/tb";
import { MdOutlinePinDrop, MdTrolley } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs";

function Header() {
  const [showLang, setShowLang] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <div className={styles.taskbar}>

          <div className={styles.logo}>
            <Image
              src="/img/Logo.png"
              alt="Prometex Logo"
              width={450} height={50} priority/>
          </div>
          

          <div className={styles.tasks}>

          <div className={styles.searchBox}>
            <input type="text" placeholder="I am looking for" />
            <FaSearch className={styles.searchIcon} />
          </div>

          
          <div className={styles.actions}>         
            <div className={styles.actionItem}>
              <RiAccountCircleLine className={styles.Eicon}/>
              <span>Sign In</span>
            </div>
            <div className={styles.cart}>
              <MdTrolley className={styles.Eicon}/>
              <span className={styles.cartDot}></span>
            </div>

            <div className={styles.actionItem}>
            <MdOutlinePinDrop className={styles.Eicon}/>
            <span> Select Store</span>
            </div>

            <div
              className={styles.dropdown}
              onClick={() => setShowLang(!showLang)}>
              <TbExplicit className={styles.Eicon}/>
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
          <BsMoonStars />
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