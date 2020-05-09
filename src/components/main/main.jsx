import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Post from '../post/post'
import PostWithImage from '../postWithImage/postWithImage'
import { getAllPosts } from "../../service/api";
import { useSelector } from "react-redux";

const Main = (props) => {

  const posts = useSelector(state => state.posts.posts)

  console.log('posts', posts)

  useEffect(() => {
    if (posts === undefined) {
      getAllPosts()
      console.log('NOT WORKING')
    }
  }, [])

  const getPosts = () => {
    if (posts !== undefined) {
      return posts.map((post, i) => {
        if (post.photo !== undefined) {
          return <PostWithImage key={i} post={post} />
        } else {
          return <Post key={i} post={post} />
        }
      })
    }

    return null
  }

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
        {getPosts()}
      </section>
    </Fragment>
  );
};

export default Main;
