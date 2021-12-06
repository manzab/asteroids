import React from "react";
import styles from "./styles.module.css";

const Button = ({ text, onClick, type }) => (
  <button type={type} onClick={onClick} className={styles.button}>
    {text}
  </button>
);

export default Button;
