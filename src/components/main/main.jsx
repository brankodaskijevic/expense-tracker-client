import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Post from '../post/post'
import PostWithImage from '../postWithImage/postWithImage'

const Main = (props) => {
  return (
    <Fragment>
      <div className={styles.linkBox}>
        <Link
          to="/create-post"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}>
          Create Post
        </Link>
      </div>
      <section className={styles.mainContainer}>
        <Post />
        <PostWithImage />
        <Post />
        <PostWithImage />
      </section>
    </Fragment>
  );
};

export default Main;
