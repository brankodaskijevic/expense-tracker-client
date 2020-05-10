import React, { Fragment, useState } from 'react'
import styles from './createTransaction.module.css'
import { postTransaction } from '../../service/api';

function CreateTransaction() {

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

    try {
      await postTransaction(formData)

      window.location.assign("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const onTitleChange = (event) => {
    setFormData({
      ...formData,
      title: event.target.value,
    });
  };

  const onAmountChange = (event) => {
    setFormData({
      ...formData,
      amount: event.target.value,
    });
  };

  return (
    <Fragment>
      <section className={styles.createTransactionContiner}>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="description">Title of Transaction</label>
            <input 
              type="text" 
              name="title"
              onChange={onTitleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Amount of Transaction</label>
            <input 
              type="number" 
              name="amount" 
              onChange={onAmountChange}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="submit"
              value="Post"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
            />
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default CreateTransaction
