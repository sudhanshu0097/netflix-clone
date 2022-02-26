import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Nav.css";

function Nav(p) {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <div className="nav_logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt=""
          />

          <a
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </a>
          <a onClick={()=>
            {
              navigate("/movie")
            }}>Movies</a>
          <a
            onClick={() => {
              navigate("/tv");
            }}
          >
            Tv Series
          </a>
        </div>
        <div className="nav_avatar">
         
          <img
            onClick={() => {
              navigate("/profile");
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
