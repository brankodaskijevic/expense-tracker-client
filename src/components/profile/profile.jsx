import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getLoggedUser,
  getUsersTransaction,
  usersPosts,
  postTransaction,
} from "../../service/api";
import Transaction from "../transactions-table/transaction";
import Post from "../post/post";
import PostWithImage from "../postWithImage/postWithImage";
import Modal from "react-modal";

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const defaultImage =
    "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png";

  const transactions = useSelector((state) => state.transactions.transactions);
  const posts = useSelector((state) => state.userPosts.posts);

  useEffect(() => {
    if (transactions === undefined) {
      getUsersTransaction();
    }
  }, []);

  useEffect(() => {
    if (user === undefined) {
      getLoggedUser();
    }
  }, []);

  useEffect(() => {
    if (posts === undefined) {
      usersPosts();
    }
  }, []);

  const getTransactions = () => {
    if (transactions !== undefined) {
      return transactions.map((transaction, i) => {
        return <Transaction key={i} transaction={transaction} />;
      });
    }

    return null;
  };

  const getPosts = () => {
    if (posts !== undefined) {
      return posts.map((post, i) => {
        if (post.photo !== undefined) {
          return <PostWithImage key={i} post={post} />;
        } else {
          return <Post key={i} post={post} />;
        }
      });
    }

    return null;
  };

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: ""
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

  const onCategoryChange = (event) => {
    setFormData({
      ...formData,
      category: event.target.value,
    });
  };

  return (
    <Fragment>
      <section className={styles.profileContainer}>
        <div className={styles.profilePicSide}>
          <img
            src={user?.avatar?.data ? user?.avatar?.data : defaultImage}
            alt="avatar"
            className={styles.profilePicture}
          />
          <Link to="/user" className={styles.profileLink}>
            {user?.username}
          </Link>
        </div>
        <div className={styles.profileDescSide}>{user?.description}</div>
      </section>
      <section className={styles.userPostsAndTransactions}>
        {/* <div>
          <Link
            to="/add-transaction"
            className={`${styles.btn} ${styles.btnPrimary}`}>
            Add Transaction
          </Link>
        </div>
        <div className={styles.transactionTable}>
          <table className={styles.customers}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Satus</th>
                <th>Amount</th>
              </tr>
            </thead>
             { getTransactions() }
          </table>
        </div> */}
        <Tabs>
          <TabList>
            <Tab>Info</Tab>
            <Tab>Transactions Table</Tab>
            <Tab>My Posts</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            {/* <Link
              to="/add-transaction"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Add Transaction
            </Link> */}
            <button
              className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
              onClick={() => setModalIsOpen(true)}
            >
              Add Transaction
            </button>
            <Modal
              isOpen={modalIsOpen}
              shouldCloseOnOverlayClick={true}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(230, 230, 230, 0.90)",
                },
                content: {
                  width: "800px",
                  height: "500px",
                  margin: "auto",
                  position: "absolute",
                  top: "1rem",
                  left: "40px",
                  right: "40px",
                  bottom: "40px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "4px",
                  outline: "none",
                  padding: "20px",
                },
              }}
            >
              <section className={styles.createTransactionContiner}>
                <form onSubmit={onSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="description">Title of Transaction</label>
                    <input type="text" name="title" onChange={onTitleChange} />
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
                    <label htmlFor="amount">Category of Transaction</label>
                    <select name="category" onChange={onCategoryChange}>
                      <option value="other">Other</option>
                      <option value="groceries">Groceries</option>
                      <option value="home">Home</option>
                      <option value="investments">Investments</option>
                      <option value="entertaiment">Entertainment</option>
                      <option value="health">Health</option>
                      <option value="fees">Fees</option>
                    </select>
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
            </Modal>
            <div className={styles.transactionTable}>
              <table className={styles.customers}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Satus</th>
                    <th>Category</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                {getTransactions()}
              </table>
            </div>
          </TabPanel>
          <TabPanel>{getPosts()}</TabPanel>
        </Tabs>
      </section>
    </Fragment>
  );
};

export default Profile;
