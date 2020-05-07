import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './post.module.css'

const Post = () => {
  return (
    <Fragment>
      <div className={styles.postContainer}>
        <div className={styles.leftPostSide}>
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" className={styles.profilePicture} />
          <Link to="/user" className={styles.profileLink}>John Doe</Link>
        </div>
        <div className={styles.rightPostSide}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sunt in culpa qui officia deserunt mollit anim id est
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
