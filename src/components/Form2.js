import React from 'react'

export default function Form2() {
  return (
    <>
        <div class="sign-up-now">
        <h1>Register Now</h1>
        <form>
            <input type="email" class="input-box" placeholder="E-Mail"/>
            <input type="text" class="input-box" placeholder="Username"/>
            <input type="password" class="input-box" placeholder="Password"/>
            <p><span><input type="checkbox"/></span> I agree the terms of privacy policy</p>
            <button class="button"><span>Register</span></button>
            {/* <button type="button" class="signup-btn">Sign Up</button> */}
            <br/>
            <br/>
            <hr class="hr-style"/>
            <p class="or">OR</p>

            <button type="button" class="signup-btn">Login with <img src="icon.png" alt='google icon' width = "15px" height = "15px"/></button>
            <p>Do you have an account ? <a href="form.html">Sign In</a></p> 
            <br/>
        </form>
    </div>
    </>
  )
}
