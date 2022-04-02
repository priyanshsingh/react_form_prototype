import React from 'react'
import './style.css'

export default function from1() {
  return (
    <>
      <div className="sign-up-now">
          <h1>Sign Up Now</h1>
          <form>
              <input type="email" className="input-box" placeholder="E-Mail"/>
              <input type="password" className="input-box" placeholder="Password"/>
              <p><span><input type="checkbox"/></span> I agree the terms of privacy policy</p>
              <button className="button"><span>Sign Up</span></button>
              {/* <button type="button" className="signup-btn">Sign Up</button> */}
              <hr className="hr-style"/>
              <p className="or">OR</p>

              <button type="button" className="signup-btn">Login with Google</button>
              <p>Don't have an account ? <a href="form_reg.html">Sign In</a></p> 
              <br/>
          </form>
      </div>

    </>
  )
}
