import React, { Fragment } from "react";
import styles from './landing.module.css'

function landing() {

  return (
    <Fragment>
      <section className={styles.landing}>
        <div className={styles.darkOverlay}>
          <div className={styles.landingInner}>
            <h1 className={styles.xLarge}>
              Expense<span className={styles.textPrimary}>Tracker</span>
            </h1>
            <p className={styles.lead}>
              Track your daily expenses and share some cheap tricks with all the
              users
            </p>
            <div className={styles.buttons}>
              <a href="register.html" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}>
                Sign Up
              </a>
              <a href="login.html" className={`${styles.btn} ${styles.lead}`}>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.leftSection}>
          <h1>Number of active users:</h1>
          <h2 className={styles.textPrimary}>4.000.000</h2>
          <div className={styles.devider}></div>
          <h1>With a Total Balance of:</h1>
          <h2 className={styles.textSuccess}>4.000.000</h2>
        </div>
        <div className={styles.rightSection}>
          <h1>All incomes:</h1>
          <h2 className={styles.textSuccess}>+4.343.233</h2>
          <div className={styles.devider}></div>
          <h1>All expenses:</h1>
          <h2 className={styles.textDanger}>-4.343.233</h2>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>ExpenseTracker 1.0.0</div>
        <div>Branko Daskijevic <i class="far fa-copyright"></i> 2020</div>
        <div>
          Made with 
          &nbsp;
          <i class="fab fa-node-js"></i>&nbsp;
          &nbsp;
          <i className="fab fa-react"></i>&nbsp;
          and
          &nbsp;
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </Fragment>
  );
}

export default landing;
