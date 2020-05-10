import React, { Fragment, useState } from "react";
import styles from "./createPost.module.css";
import { postPost } from "../../service/api";
import { loadFile } from "../../utils/imagehelper";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    description: "",
    photo: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

    try {
      await postPost(formData)

      window.location.assign("/main");
    } catch (err) {
      console.log(err);
    }
  };

  const onDescriptionChange = (event) => {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  };

  const onPhotoChange = async (event) => {
    if (event.target.files !== undefined && event.target.files.length > 0) {
      const photo = await loadFile(event.target.files[0])

      setFormData({
        ...formData,
        photo,
      });
    }
  };

  return (
    <Fragment>
      <section className={styles.createPostContiner}>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label><br/>
            <small>The description can be no longer than 500 characters</small>
            <textarea
              name="description"
              cols="30"
              rows="10"
              onChange={onDescriptionChange}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <input 
              type="file" 
              name="photo" 
              id="file" 
              onChange={onPhotoChange}
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
  );
};

export default CreatePost;
