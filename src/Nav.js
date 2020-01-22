import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/BBHome">
          <li><img src="https://dzwonsemrish7.cloudfront.net/items/23180N3i1M171e3r0R3a/bb-logo.png?v=94adddf3" alt="Breaking Bad Logo"></img></li>
        </Link>
      </ul>
    </nav>
  );
}
