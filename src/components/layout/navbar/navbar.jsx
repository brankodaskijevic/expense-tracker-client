import React from "react";
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        <a href="dashboard.html">
          <i className="fas fa-calculator"></i> ExpenseTracker
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
}
