import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";

const Navbar1 = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          BookMy<span>Ticket</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="/">
            Home</Link>
       
        <Link to="/about" >          
           About
          
        </Link>
        <Link to="/contact">
            Contact 
         
        </Link>
        <Link to="/login" >
          
            Login
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar1;