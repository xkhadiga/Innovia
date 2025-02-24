import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterContext = createContext();
export const RegisterProvider = ({ children }) => {
  // handle register form toggler  *****************
  const [register, setRegister] = useState(false);
  const handle_register = () => {
    setRegister(!register);
  };
      // handle form inputs *****************
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [password2, setPassword2] = useState(""); 
    //   validation messages *****************
      const [msg, setMsg] = useState("");
      const [msg2, setMsg2] = useState("");
      const [msg3, setMsg3] = useState("");
      const [msg4, setMsg4] = useState("");
        // validation states *****************
      const [nameValid, setNameValid] = useState(false);
      const [PasswordValid, setPasswordValid] = useState(false);
      const [Password2Valid, setPassword2Valid] = useState(false);
      const [EmailValid, setEmailValid] = useState(false);
      
        // name validation *****************
      const handle_name = (e) => {
        let currentName = e.target.value;
        setName(currentName);
                // name validation
                if (!currentName) {
                    setMsg("");
                    setNameValid(false);
                  } else if (currentName.length < 3) {
                    setMsg("Name must be atleast 3 characters long");
                    setNameValid(false);
                  } else if (currentName.length > 20) {
                    setMsg("Name must not be greater than 20 characters");
                    setNameValid(false);
                  } else {
                    setMsg("");
                    setNameValid(true);
                  }
      };
      // email validation *******************
     const handle_email = (e) => {
        setEmail(e.target.value);
                let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (regex.test(e.target.value)) {
                    console.log("Valid Email");
                  setMsg2("");
                  setEmailValid(true);
                }
                else {
                    setMsg2("Invalid Email");
                    setEmailValid(false);                }
      };
      const handle_password = (e) => {
        setPassword(e.target.value);
        let regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[a-zA-Z\d@$!%*?#&]{5,}$/;
        if (regex.test(e.target.value)) {
            setPasswordValid(true);
            setMsg3("");
            console.log("Valid Password");
        } else {
            setPasswordValid(false);
            setMsg3("Password must contain at least 5 characters, one letter, one number, and one special character"); 
            console.log("Invalid Password");
        }
      };
      const handle_password2 = (e) => { 
        const confirmPassword = e.target.value;

        setPassword2(confirmPassword);
        if (password === confirmPassword) {
            setPassword2Valid(true);
            setMsg4(""); 
        }
            else {
                setPassword2Valid(false);
                setMsg4("Password does not match");
            }
        };
    
      const handle_submit = (e) => {
        e.preventDefault();
        
        if (nameValid && EmailValid && PasswordValid && Password2Valid) {
          toast.info(`Registration Successful, Welcome ${name}`, {
            position: "bottom-left",
            autoClose: 2500,
          });

          setRegister(false);
    
        }
      };
  return (
  <RegisterContext.Provider value={{ handle_email, handle_name, handle_password, handle_password2,handle_register, handle_submit, name,password,password2,email, msg,msg2,msg3,msg4, register,setRegister }} >
    {children}
  </RegisterContext.Provider>
  );
};
