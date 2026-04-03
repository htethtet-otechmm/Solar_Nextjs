"use client";

import styles from "../../styles/Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  // onClick?: () => void;
}

export const Button = ({
  children,
  variant = "primary",
  // onClick,
}: ButtonProps) => {
  const className = `${styles.btn} ${styles[variant]}`;

  return <button className={className}>{children}</button>;
};
