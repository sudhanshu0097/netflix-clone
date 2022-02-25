import React from "react";
import "./LoginScreen.css";
import {useState} from "react"
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn,setSignIn] =useState(false)

  return (
    <>
      <div className="loginScreen">
        <div className="loginScreenBg">
          <img
            className="login_logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          ></img>
          <button onClick={()=>{setSignIn(true)}} className="login_button">Sign In</button>

          <div className="login_gradient"></div>
        </div>
        <div className="login_body">
          {signIn ? (<SignInScreen/>)
          :(
            <>
            <h1>Unlimited movies, TV Shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button onClick={()=>{setSignIn(true)}}  className="login_getStarted">GET STARTED</button>
              </form>
            </div>
          </>

          )
          
        
        }
         
        </div>
      </div>
      <div className="below_login"></div>
    </>
  );
}

export default LoginScreen;
