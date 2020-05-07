import React from "react";
import { Link } from "react-router-dom";
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
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
