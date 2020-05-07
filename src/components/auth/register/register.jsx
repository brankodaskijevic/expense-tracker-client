import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";
import { register } from "../../../service/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      if (passoword !== passoword2) {
        console.log('Passwords do not match')
      }

      await register(formdata);

      window.location.assign("main");
    } catch (err) {
      console.log(err);
    }
  };

  const onUsernameChange = (event) => {
    setFormData({
      ...formData,
      username: event.target.value
    })
  }

  const onEmailChange = (event) => {
    setFormData({
      ...formData,
      email: event.target.value
    })
  }

  const onPasswordChange = (event) => {
    setFormData({
      ...formData,
      password: event.target.value
    })
  }

  const onPasswordConfirmChange = (event) => {
    setFormData({
      ...formData,
      password_confirm: event.target.value
    })
  }

  return (
    <Fragment>
      <section class={styles.formContainer}>
        <h1 className={`${styles.large} ${styles.textPrimary}`}>Sign Up</h1>
        <p class={styles.lead}>Create Your Account</p>
        <form onSubmit={onSubmit} class={styles.form}>
          <div class="form-group">
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              onChange={onUsernameChange}
            />
          </div>
          <div class={styles.formGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              onChange={onEmailChange}
            />
          </div>
          <div class={styles.formGroup}>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={onPasswordChange}
            />
          </div>
          <div class={styles.formGroup}>
            <input
              type="password"
              name="password_confirm"
              placeholder="Confirm Password"
              onChange={onPasswordConfirmChange}
            />
          </div>
          <input
            type="submit"
            value="Continue"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
          />
        </form>
        <p class={styles.my1}>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
}

export default Register;
