import React from 'react'
import { useContext } from 'react'
import { RegisterContext } from '../Context/RegisterContext'
import { RegisterProvider } from '../Context/RegisterContext'

function Register() {
  const { 
    name,
    password,
    password2,
    email, 
    msg,
    msg2,
    msg3,
    msg4,
    handle_email, 
    handle_name, 
    handle_password, 
    handle_password2, 
    handle_submit, 
 } = useContext(RegisterContext);
  return (
    <form className="form-k p-5 ">
    <p id="heading">Create Your Account</p>
    <div className="field-k">
      <input 
      onChange={handle_name}
      value={name}
      autoComplete="off" 
      placeholder="Enter Your Name" 
      className="input-field-k" 
      type="text" />
    </div>
    <span></span>
      {msg && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg} **`}
        </span>
      )}
    <div className="field-k">
      <input 
      onChange={handle_email}
      value={email}
      autoComplete="off" 
      placeholder="Enter Your Email" 
      className="input-field-k" 
      type="text" />
    </div>
    <span></span>
      {msg2 && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg2} **`}
        </span>
      )}
    <div className="field-k">
      <input 
      onChange={handle_password}
      value={password}
      autoComplete="off"
      placeholder="Enter Your Password" 
      className="input-field-k" 
      type="password" />
    </div>
    <span></span>
      {msg3 && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg3} **`}
        </span>
      )}
    <div className="field-k">
      <input 
      onChange={handle_password2}
      value={password2}
      autoComplete="off"
      placeholder="Confirm Password" 
      className="input-field-k" 
      type="password" /> 
    </div>
    <span></span>
      {msg4 && (
        <span className="warning-msg text-center animate-pulse text-red-500 text-sm">
          {`** ${msg4} **`}
        </span>
      )}
    <div className='conditions flex items-center justify-center gap-4'>
        <input type="checkbox" id="terms" name="terms" value="terms" />
        <label htmlFor="terms">I agree to the <span className="link-k">terms of service</span></label>
    </div>
    <div className="btn-k m-4 mb-20 flex text-nowrap gap-4">
    <button
    onClick={handle_submit}
    type='submit' 
    className="button-k flex-1">
      Create Account

    </button>
    <button className="button-k2 flex-1">Login</button>
    </div>
</form>
  )
}

export default Register