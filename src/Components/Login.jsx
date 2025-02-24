import React, { use } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Login() {



    // handle submit *****************
    const {
      handle_username, 
      handle_password, 
      handle_submit, 
      username, 
      password, 
      msg, 
      msg2 
    } = useContext(LoginContext);


  return (
    <>
    <form className="form-k p-5 relative">

      <p id="heading">Login</p>
      <div className="field-k">
        <input
          onChange={handle_username}
          value={username}
          autoComplete="off"
          placeholder="Username"
          className="input-field-k"
          type="text"
        />
      </div>
      <span></span>
      {msg && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg} **`}
        </span>
      )}
      <div className="field-k">
        <input
          onChange={handle_password}
          value={password}
          placeholder="Password"
          className="input-field-k"
          type="password"
        />
      </div>
      <span></span>
      {msg2 && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg2} **`}
        </span>
      )}
      <div className="btn-k m-4 flex text-nowrap gap-3">
        <button 
        onClick={handle_submit} 
        className="button-k flex-1">
          Login
        </button>
        <button className="button-k2  flex-1">Sign Up</button>
      </div>
      <button className="button-k2 mb-10">Forgot Password</button>
    </form>

    </>
  );
}

export default Login;
