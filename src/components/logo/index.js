import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import styles from "./styles.module.css";

const CompanyLogo = () => (
  <div className={styles["logo-container"]}>
    <Logo />
  </div>
);

export default CompanyLogo;
