// Navbar.js
import React, { useState } from "react";
import { FaSearch,FaOpencart,FaRegUser} from "react-icons/fa";
import {Link} from 'react-router-dom';
import "../styles/navbar.css";


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const menuHandler = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    
    <nav className="navigation">
      <a href="/home" className="brand-name">
        MY COMPNAY.COM
      </a>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
    
        <ul style={{marginBottom:"0px"}}>
          <li>

            <Link to="/theedit">THE EDIT</Link>
          </li>
          <li>
            <Link to="/newarrivals">NEW ARRIVALS</Link>
          </li>
          <li>
          <Link to="/home">HOME</Link>
          </li>
        </ul>
      </div>
      <div>
      <FaSearch /> &nbsp; <FaOpencart /> &nbsp; <FaRegUser/>
      </div>
    
      
      <button className="hamburger" onClick={menuHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
}
