import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h2 style={{ marginTop: "15px" }}>調酒大補帖</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
