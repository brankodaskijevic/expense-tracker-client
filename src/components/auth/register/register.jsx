import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './register.module.css'

function register() {
  return (
    <Fragment>
      <section class={styles.formContainer}>
        <h1 className={`${styles.large} ${styles.textPrimary}`}>Sign Up</h1>
        <p class={styles.lead}>Create Your Account</p>
        <form action="dashboard.html" class={styles.form}>
          <div class="form-group">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div class={styles.formGroup}>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div class={styles.formGroup}>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div class={styles.formGroup}>
            <input
              type="password"
              name="password_confirm"
              placeholder="Confirm Password"
            />
          </div>
          <input type="submit" value="Continue" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`} />
        </form>
        <p class={styles.my1}>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
}

export default register;
