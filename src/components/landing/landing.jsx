import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './landing.module.css'
import { useSelector } from "react-redux";
import { getGeneralInfo } from "../../service/api";

const Landing = (props) => {

  const generalData = useSelector(state => state.general)

  useEffect(() => {
    // if (generalData.activeUsers && 
    //   generalData.totalBalance &&
    //   generalData.allExpenses &&
    //   generalData.allIncomes === undefined
    // ) {
    //   getGeneralInfo()
    // }

    getGeneralInfo()
  }, [])

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
              <Link to="/register" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}>
                Sign Up
              </Link>
              <Link to="/login" className={`${styles.btn} ${styles.lead}`}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.leftSection}>
          <h1>Number of active users:</h1>
          <h2 className={styles.textPrimary}>{generalData.activeUsers ?? null}</h2>
          <div className={styles.devider}></div>
          <h1>With a Total Balance of:</h1>
          <h2 className={styles.textSuccess}>{generalData.totalBalance ?? null}</h2>
        </div>
        <div className={styles.rightSection}>
          <h1>All incomes:</h1>
          <h2 className={styles.textSuccess}>+{generalData.allIncomes ?? null}</h2>
          <div className={styles.devider}></div>
          <h1>All expenses:</h1>
          <h2 className={styles.textDanger}>-{generalData.allExpenses ?? null}</h2>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>ExpenseTracker 1.0.0</div>
        <div>Branko Daskijevic <i className="far fa-copyright"></i> 2020</div>
        <div>
          Made with 
          &nbsp;
          <i className="fab fa-node-js"></i>&nbsp;
          &nbsp;
          <i className="fab fa-react"></i>&nbsp;
          &
          &nbsp;
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </Fragment>
  );
}

export default Landing;
