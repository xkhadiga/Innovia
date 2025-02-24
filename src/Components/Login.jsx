import React from 'react'

function Login() {
  return (
    <form className="form-k p-5 ">
    <p id="heading">Login</p>
    <div className="field-k">

      <input autoComplete="off" placeholder="Username" className="input-field-k" type="text" />
    </div>
    <div className="field-k">
      <input placeholder="Password" className="input-field-k" type="password" />
    </div>
    <div className="btn-k m-4 flex text-nowrap">
    <button className="button-k flex-1">Login</button>
    <button className="button-k flex-1">Sign Up</button>
    </div>
    <button className="button-k mb-10">Forgot Password</button>
</form>
  )
}

export default Login