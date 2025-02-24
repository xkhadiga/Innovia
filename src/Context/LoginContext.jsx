import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";

export const LoginContext = createContext();
export function LoginProvider({ children }) {
  // handle login form toggler  *****************
  const [login, setLogin] = useState(false);
  const handle_login = () => {
    setLogin(!login);
  };
  
  // handle form inputs *****************
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");

  // handle username  & password *****************

  const handle_username = (e) => {
    setUsername(e.target.value);
  };

  const handle_password = (e) => {
    setPassword(e.target.value);
  };

  const handle_submit = (e) => {
    e.preventDefault();
    let valid = false;
    if (username === "") {
      setMsg("");
      valid = false;
    } else if (username.length < 3) {
      setMsg("Username must be atleast 3 characters long");
      valid = false;
    } else if (username.length > 20) {
      setMsg("Username must not be greater than 20 characters");
      valid = false;
    } else {
      setMsg("");
      valid = true;
    }

    if (password === "") {
      setMsg2("");
      valid = false;
    } else if (password.length < 3 || password.length > 20) {
      setMsg2("Wrong Password");
      valid = false;
    } else {
      setMsg2("");
      valid = true;
    }

    if (valid) {
      toast.info(`Login Successful, Welcome ${username}`, {
        position: "bottom-left",
        autoClose: 2500,
      });
      setUsername("");
      setPassword("");
      setLogin(false);

    }
  };
  return (
    <LoginContext.Provider
      value={{
        handle_username,
        handle_password,
        handle_submit,
        username,
        password,
        msg,
        msg2,
        login,
        setLogin,
        handle_login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
