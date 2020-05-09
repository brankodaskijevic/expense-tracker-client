import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './post.module.css'

const Post = ({ post }) => {

  const {
    description,
    user,
  } = post

  const defaultImage = "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"

  return (
    <Fragment>
      <div className={styles.postContainer}>
        <div className={styles.leftPostSide}>
          <img src={user.image ? user.image : defaultImage} alt="avatar" className={styles.profilePicture} />
          <Link to="/user" className={styles.profileLink}>{user.username}</Link>
        </div>
        <div className={styles.rightPostSide}>
          { description }
          <div className={styles.devider}></div>
          <div className={styles.likeElement}>
            <input type="submit" value="Like" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`} />
            123
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Post
