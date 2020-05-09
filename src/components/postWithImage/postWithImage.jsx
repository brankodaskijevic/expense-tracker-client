import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './postWithImage.module.css'

const PostWithImage = ({ post }) => {
  
  const {
    description,
    photo,
    user,
  } = post

  console.log(photo)

  const defaultImage = "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"

  return (
    <Fragment>
      <section className={styles.postContainer}>
        <div className={styles.topPostContent}>
          <div className={styles.leftPostSide}>
            <img src={ photo } alt="post-image" className={styles.postImage} />
          </div>
          <div className={styles.rightPostSide}>
            { description }
          </div>
        </div>
        <div className={styles.bottomPostContent}>
          <div className={styles.bottomLeftPostSide}>
          <img src={user.image ? user.image : defaultImage} alt="avatar" className={styles.profilePicture} />
          <Link to="/user" className={styles.profileLink}>{ user.username }</Link>
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
