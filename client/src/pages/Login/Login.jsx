import "./Login.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
import Sawo from "sawo";
const API_KEY = "737fdccf-8b92-4f5f-b18e-bb2a9b8291e1";

export default function Login() {
  // const userRef = useRef();
  // const passwordRef = useRef();
  // const { dispatch, isFecthing } = useContext(Context);

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});


  // const handleSubmit = async (e) => {
  //   console.log("hi");
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("auth/login", {
  //       username: userRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE" });
  //   }
  // };


  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);


  return (
    <div className="Login">
      <div className="Login-card">
        <div className="Login-heading">
          <span className="Login-welcome">
            Welcome to<strong> Post IT </strong>
          </span>
          <span>
            <p>Lets go password less auth</p>
          </span>
        </div>
        <div className="Login-input">
          <h1>Login </h1>
          <form className="loginForm" >
            <div
              id="sawo-container"
              style={{ height: "300px", width: "400px" }}
              className="containerStyle"
            >
              <section>
                {!isUserLoggedIn ? (
                  <div className="formContainer" id="sawo-container"></div>
                ) : (
                  <div className="loggedin">
                    <h2>User Successful Login</h2>
                    <div>UserId: {payload.user_id}</div>
                    <div>Verification Token: {payload.verification_token}</div>
                    <div>username: {payload}</div>
                  </div>
                )}
              </section>
              {/* <label>Username</label>
            <input className="inputField" placeholder="Enter your Username" ref={userRef}/>
            <br />
            <label> Password</label>
            <input type="password" placeholder="Enter your Password"  ref = {passwordRef}/>

            <div className="Login-summit">
            <button type="summit" disabled={isFecthing}> Sign in</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
