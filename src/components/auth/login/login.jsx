import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { login } from "../../../service/api";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { email, password } = formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      await login(formData);

      window.location.assign("/main");
    } catch (err) {
      console.log(err);
    }
  };

  const onUsernameChange = (event) => {
    setFormData({
      ...formData,
      username: event.target.value,
    });
  };

  const onPasswordChange = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  return (
    <Fragment>
      <section class={styles.formContainer}>
        <h1 className={`${styles.large} ${styles.textPrimary}`}>Sign In</h1>
        <p class={styles.lead}>Sign Into Your Account</p>
        <form onSubmit={onSubmit} class={styles.form}>
          <div class={styles.formGroup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onUsernameChange}
            />
          </div>
          <div class={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
          <input
            type="submit"
            value="Continue"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
          />
        </form>
        <p class={styles.my1}>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
}

export default Login;
