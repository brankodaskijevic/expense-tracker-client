import React, { Fragment } from 'react'
import styles from './createPost.module.css'

const CreatePost = () => {
  return (
    <Fragment>
      <section className={styles.createPostContiner}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea 
              name="description" 
              placeholder="Description of post (max. 500 characters)" 
              cols="30" 
              rows="10"
              ></textarea>
          </div>
          <div className={styles.formGroup}>
            <input type="file" name="photo" id="file" />
          </div>
          <div className={styles.formGroup}>
            <input type="submit" value="Post" className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`} />
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default CreatePost
