import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./post.module.css";

const Post = ({ post }) => {
  const { description, likes, user } = post;

  const defaultImage =
    "https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png";

  return (
    <Fragment>
      <div className={styles.postContainer}>
        <div className={styles.leftPostSide}>
          <img
            src={user.avatar ? user.avatar : defaultImage}
            alt="avatar"
            className={styles.profilePicture}
          />
          <Link to="/user" className={styles.profileLink}>
            {user.username}
          </Link>
        </div>
        <div className={styles.rightPostSide}>
          {description}
          <div className={styles.devider}></div>
          <div className={styles.likeElement}>
            <input
              type="submit"
              value="Like"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
            />
            {likes.length}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
