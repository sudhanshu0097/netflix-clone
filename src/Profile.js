import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "./features/userSlice";
import { auth } from './firebase';


import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile_nav">
        <div className="profile_nav_contents">
          <img className="profile_nav_logo"
            onClick={() => {
              navigate("/");
            }}
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt=""
          />

          <img className="profile_nav_avatar"
            onClick={() => {
              navigate("/profile");
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>





      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
          <div className="profile_details">
              
            <h2>{(user.email?user.email:"user")}</h2>
            <div className="profile_plans">
              <h3>Member since :- {user.created[1]+"/"+user.created[2] + "/" +user.created[3]}</h3>
              <h3>My Available Plans</h3>
              <div className="plan_details">
                <div className="plan_details_child">
                  <h3>Basic</h3>
                  <h3>Price-:200</h3>
                  
                  </div>  

                  <div className="plan_details_child">
                  <h3>Standard</h3>
                  <h3>Price-:400</h3>
                  
                  </div> 

                  <div className="plan_details_child">
                  <h3>H.D(1080px)</h3>
                  <h3>Price-:600</h3>
                  
                  </div> 

                  <div className="plan_details_child">
                  <h3>4k(2160px)</h3>
                  <h3>Price-:800</h3>
                  
                  </div> 

                  <div className="plan_details_child">
                  <h3>Mobile version</h3>
                  <h3>Price-:149</h3>
                  
                  </div> 

              </div>

              <button onClick={()=>{
                  auth.signOut();
                  navigate("/")
              }} className="profile_logout">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
