import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './postWithImage.module.css'

const PostWithImage = () => {
  return (
    <Fragment>
      <section className={styles.postContainer}>
        <div className={styles.topPostContent}>
          <div className={styles.leftPostSide}>
            <img src="https://code.visualstudio.com/assets/docs/languages/typescript/overview.png" alt="post-image" className={styles.postImage} />
          </div>
          <div className={styles.rightPostSide}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sunt in culpa qui officia deserunt mollit anim id est
          </div>
        </div>
        <div className={styles.bottomPostContent}>
          <div className={styles.bottomLeftPostSide}>
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" className={styles.profilePicture} />
            <Link to="/user" className={styles.profileLink}>John Doe</Link>
          </div>
          <div className={styles.bottomRightPostSide}>
            <div className={styles.likeElement}>
              <input type="submit" value="Like" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`} />
              123
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PostWithImage
