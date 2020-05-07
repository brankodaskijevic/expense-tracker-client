import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './login.module.css'

function login() {
  return (
    <Fragment>
      <section class={styles.formContainer}>
        <h1 className={`${styles.large} ${styles.textPrimary}`}>Sign In</h1>
        <p class={styles.lead}>Sign Into Your Account</p>
        <form action="dashboard.html" class={styles.form}>
          <div class={styles.formGroup}>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div class={styles.formGroup}>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Continue" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`} />
        </form>
        <p class={styles.my1}>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
}

export default login;
