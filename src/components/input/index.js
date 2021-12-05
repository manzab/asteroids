import React from "react";
import styles from "./styles.module.css";

const Input = ({ label, type, placeholder, onChange }) => (
  <div>
    <label className={styles.label}>{label}</label>
    <input
      onChange={onChange}
      type={type || "text"}
      placeholder={placeholder}
      className={styles.input}
    />
  </div>
);

export default Input;
