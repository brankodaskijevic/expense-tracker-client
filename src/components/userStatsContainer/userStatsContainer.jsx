import React, { Fragment } from "react";
import styles from "./userStatsContainer.module.css";
import { numberWithCommas } from "../../utils/helper-functions";

const UserStatsContainer = ({ data }) => {
  const TOTAL_BALANCE = data.totalBalance;
  const TOTAL_INCOME = data.totalIncomes;
  const TOTAL_EXPENSE = data.totalExpenses;

  console.log(TOTAL_BALANCE);

  return (
    <Fragment>
      <div className={styles.userStatsContainer}>
        <div className={styles.userTotalBalanceContainer}>
          Total Balance:
          <p className={styles.blueColor}>
            €{numberWithCommas(String(TOTAL_BALANCE ?? 0))}
          </p>
        </div>
        <div className={styles.userStatsRigtGrid}>
          <div className={styles.userTotalIncContainer}>
            Income:
            <p className={styles.greenColor}>
              €{numberWithCommas(String(TOTAL_INCOME ?? 0))}
            </p>
          </div>
          <div className={styles.userTotalExpContainer}>
            Expense:
            <p className={styles.redColor}>
              €{numberWithCommas(String(TOTAL_EXPENSE ?? 0))}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserStatsContainer;
