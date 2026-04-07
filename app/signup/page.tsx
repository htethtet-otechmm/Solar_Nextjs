"use client";
import { FacebookIcon } from "@/component/Icon/FacebookIcon";
import { GoogleIcon } from "@/component/Icon/GoogleIcon";
import Image from "next/image";
import styles from "../../styles/auth.module.css";
import { MailIcon } from "@/component/Icon/MailIcon";
import { LockIcon } from "@/component/Icon/LockIcon";
import PersonIcon from "@/component/Icon/PersonIcon";
export default function UserSignin() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authLayout}>
        <div className={styles.secondaryAuthField}>
          <div>
            <h2 className={styles.signupTitle}>Welcome Back</h2>
            <p className={styles.authText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              adipisci? Quam ipsam dolor magnam. Maiores.
            </p>
            <div className={styles.authBtnContainer}>
              <button className={styles.secondaryAuthBtn}>SIGN IN</button>
            </div>
          </div>
        </div>

        <div className={styles.signinForm}>
          <div className={styles.signinBox}>
            <Image
              src="/img/prometex.png"
              width={450}
              height={60}
              alt="Prometex"
              className={styles.authLogo}
            />
            <h2 className={styles.authTitle}>Create Account</h2>
            <div className={styles.socialMedia}>
              <GoogleIcon />
              <FacebookIcon />
            </div>
            <p
              style={{ color: "#868686", textAlign: "center", margin: "1rem" }}
            >
              or use your email for registration
            </p>
            <form action="">
              {/* Name */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
                className={styles.inputField}
              >
                <div style={{ position: "absolute", left: "35px" }}>
                  <PersonIcon />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ paddingLeft: "70px" }}
                  className={styles.inputBox}
                />
              </div>
              {/* Email */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
                className={styles.inputField}
              >
                <div style={{ position: "absolute", left: "35px" }}>
                  <MailIcon />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  style={{ paddingLeft: "70px" }}
                  className={styles.inputBox}
                />
              </div>
              {/* Password */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
                className={styles.inputField}
              >
                <div style={{ position: "absolute", left: "35px" }}>
                  <LockIcon />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  style={{ paddingLeft: "70px" }}
                  className={styles.inputBox}
                />
              </div>

              <div
                className={styles.authBtnContainer}
                style={{ marginTop: "5px" }}
              >
                <button className={styles.signinBtn}>SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
