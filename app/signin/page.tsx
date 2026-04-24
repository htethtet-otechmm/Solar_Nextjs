"use client";
import { FacebookIcon } from "@/component/Icon/FacebookIcon";
import { GoogleIcon } from "@/component/Icon/GoogleIcon";
import Image from "next/image";
import styles from "../../styles/auth.module.css";
import { MailIcon } from "@/component/Icon/MailIcon";
import { LockIcon } from "@/component/Icon/LockIcon";
export default function UserSignin() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authLayout}>
        <div className={styles.signinForm}>
          <div className={styles.signinBox}>
            <Image
              src="/img/Logo.png"
              width={450}
              height={60}
              alt="Prometex"
              className={styles.authLogo}
            />
            <h2 className={styles.authTitle}>Sign in to Shopping</h2>
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
                  style={{ paddingLeft: "65px" }}
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
                  style={{ paddingLeft: "65px" }}
                  className={styles.inputBox}
                />
              </div>
              <a href="" className={styles.forgotPassword}>
                Forgot Your Password?
              </a>
              <br />
              <div className={styles.authBtnContainer}>
                <button className={styles.signinBtn}>SIGN IN</button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.authField}>
          <div>
            <h2 className={styles.signupTitle}>Dear Customer</h2>
            <p className={styles.authText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
              explicabo.
            </p>
            <div className={styles.authBtnContainer}>
              <button className={styles.secondaryAuthBtn}>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
