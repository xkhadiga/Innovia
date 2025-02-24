import React from 'react'

function Register() {
  return (
    <form className="form-k p-5 ">
    <p id="heading">Create Your Account</p>
    <div className="field-k">
      <input autoComplete="off" placeholder="Enter Your Name" className="input-field-k" type="text" />
    </div>
    <div className="field-k">
      <input autoComplete="off" placeholder="Enter Your Email" className="input-field-k" type="text" />
    </div>
    <div className="field-k">
      <input placeholder="Enter Your Password" className="input-field-k" type="password" />
    </div>
    <div className="field-k">
      <input placeholder="Confirm Password" className="input-field-k" type="password" /> 
    </div>
    <div className='conditions flex items-center justify-center gap-4'>
        <input type="checkbox" id="terms" name="terms" value="terms" />
        <label htmlFor="terms">I agree to the <span className="link-k">terms of service</span></label>
    </div>
    <div className="btn-k m-4 mb-20 flex text-nowrap">
    <button className="button-k flex-1">Create Account</button>
    <button className="button-k flex-1">Login</button>
    </div>
</form>
  )
}

export default Register