import React, { Fragment } from "react";
import styles from "./transaction.module.css";
import { numberWithCommas } from "../../utils/helper-functions";

const Transaction = ({ transaction }) => {
  const { title, status, category, amount } = transaction;

  return (
    <Fragment>
      <tr className={styles.tableRow}>
        <td>{title}</td>
        <td className={amount > 0 ? styles.greenText : styles.redText}>
          {status}
        </td>
        <td>
          {category}
        </td>
        <td className={amount > 0 ? styles.greenText : styles.redText}>
          {amount > 0 ? "+" : ""}
          {numberWithCommas(amount)}€
        </td>
      </tr>
    </Fragment>
  );
};

export default Transaction;
