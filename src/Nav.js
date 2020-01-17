import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/BBHome">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}
