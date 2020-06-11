import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./postWithImage.module.css";
import { likePost } from "../../service/api";

const PostWithImage = ({ post }) => {
  const { description, likes, photo, user } = post;

  const defaultImage =
    "https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png";

  const onLike = () => {
    likePost(post._id);
  };

  return (
    <Fragment>
      <section className={styles.postContainer}>
        <div className={styles.topPostContent}>
          <div className={styles.leftPostSide}>
            <img src={photo} alt="post-image" className={styles.postImage} />
          </div>
          <div className={styles.rightPostSide}>{description}</div>
        </div>
        <div className={styles.bottomPostContent}>
          <div className={styles.bottomLeftPostSide}>
            <img
              src={user.avatar ? user.avatar : defaultImage}
              alt="avatar"
              className={styles.profilePicture}
            />
            <Link to="/user" className={styles.profileLink}>
              {user.username}
            </Link>
          </div>
          <div className={styles.bottomRightPostSide}>
           
              <button
                onClick={onLike}
                className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
              >
                <i className="fas fa-thumbs-up" style={{ margin: '0 1rem' }}></i>
                {likes.length}
              </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PostWithImage;
