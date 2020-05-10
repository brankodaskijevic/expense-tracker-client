import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Post from "../post/post";
import PostWithImage from "../postWithImage/postWithImage";
import { getAllPosts, postPost } from "../../service/api";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { loadFile } from "../../utils/imagehelper";

const Main = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    if (posts === undefined) {
      getAllPosts();
    }
  }, []);

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
    description: "",
    photo: undefined
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
      <div className={styles.linkBox}>
        {/* <Link
          to="/create-post"
          className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
        >
          Create Post
        </Link> */}
        <button 
          className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
          onClick={() => setModalIsOpen(true)}
        >
          Create Post
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
          <section className={styles.createPostContiner}>
            <form onSubmit={onSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <br />
                <small>
                  The description can be no longer than 500 characters
                </small>
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
        </Modal>
      </div>
      <section className={styles.mainContainer}>{getPosts()}</section>
    </Fragment>
  );
};

export default Main;
