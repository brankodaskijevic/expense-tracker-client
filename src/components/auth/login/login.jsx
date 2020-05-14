import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { login } from "../../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showErrorToast = (message) => (
  toast.error(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
)

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const notify = () => toast.error('Error message', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      await login(formData);

      window.location.assign("/main");
    } catch (err) {
      showErrorToast(err.response.data.message);
    }
  };

  const onUsernameChange = (event) => {
    setFormData({
      ...formData,
      username: event.target.value,
    });
  };

  const onPasswordChange = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  return (
    <Fragment>
      <section className={styles.formContainer}>
        <h1 className={`${styles.large} ${styles.textPrimary}`}>Sign In</h1>
        <p className={styles.lead}>Sign Into Your Account</p>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={onUsernameChange}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
          <input
            type="submit"
            value="Continue"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
          />
        </form>
        <p className={styles.my1}>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
            <button onClick={notify}>click me</button>
    </Fragment>
  );
}

export default Login;
