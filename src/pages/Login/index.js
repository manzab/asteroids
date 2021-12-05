import React, { useState } from "react";
import Logo from "../../components/logo";
import styles from "./styles.module.css";
import asteroids from "../../assets/img/asteroid.png";
import Input from "../../components/input";
import { useSelector, useDispatch } from "react-redux";
import verifyUser from "../../actions/verifyUser";
import { useNavigate } from "react-router-dom";
import * as routes from "../../constants/routes";

const Login = () => {
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const user = useSelector((state) => state.verifyUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitCredentials = () => {
    dispatch(
      verifyUser({ username: nameValue.trim(), password: passwordValue.trim() })
    );
  };

  return (
    <div>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["image-container"]}>
          <img src={asteroids} alt="asteroid" />
        </div>
        <div className={styles["login-container"]}>
          <div className={styles["text-container"]}>
            <h1>Login</h1>
            <p className={styles["login-text"]}>
              Name and Password should be stored in Redux state. Proceed to next
              screen if demo/demo is entered.
            </p>
            <div className={styles["inputs-container-wrapper"]}>
              <div className={styles["input-container"]}>
                <Input
                  placeholder="Name"
                  label={nameValue && "Name"}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>
              <div className={styles["input-container"]}>
                <Input
                  type="password"
                  placeholder="Password"
                  label={passwordValue && "Password"}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
              {user.isUserLoggedIn ? (
                navigate(routes.DATA)
              ) : (
                <p className={styles.error}>{user.error}</p>
              )}
            </div>
          </div>
          <div className={styles["button-container"]}>
            <button
              type="submit"
              className={styles["login-button"]}
              onClick={submitCredentials}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
