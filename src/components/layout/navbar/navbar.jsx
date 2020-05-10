import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import * as Cookie from 'es-cookie'
import { useSelector } from "react-redux";
import { getLoggedUser } from "../../../service/api";

export default function Navbar() {

  const user = useSelector(state => state.user.user)

  useEffect(() => {
    if (user === undefined) {
      getLoggedUser()
    }
  }, [])

  const isLoggedIn = () => {
    return Cookie.get('token') !== undefined
  }

  const userLoggout = () => {
    Cookie.remove('token')
  }

  const authLinks = (
    <ul>
      <li><Link to="/profile">{ user?.username }</Link></li>
      <li><Link to="/settings"><i class="fas fa-cog"></i></Link></li>
      <li><Link to="/" onClick={userLoggout}>Logout</Link></li>
    </ul>
  )

  const defaultLinks = (
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )

  return (
    <nav className={styles.navbar}>
      <h1>
        <a href="dashboard.html">
          <i className="fas fa-calculator"></i> ExpenseTracker
        </a>
      </h1>
      { isLoggedIn ? authLinks : defaultLinks }
    </nav>
  );
}
