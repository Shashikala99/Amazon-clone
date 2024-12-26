
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>
    <div className="login">
      <img
        className="login_logo"
        src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
        alt="Amazon Logo"
      />

      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>Email or mobile phone number</h5>
          <input type="text" />

          <button type="submit" className="login_signInButton">Continue</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <a href="/">Need help?</a>

        <div className="login_divider"></div>
        <p><strong>Buying for Work?</strong></p>
        <a href="/">Shop on Amazon Business</a>

       
</div>
<div className="new">
<p>New to Amazon?</p>
</div>

<div>
<button type="submit" className="createAccount_Button">Create your Amazon account</button>
       </div>
    </div>
    </div>

    
    
  );

  
}



export default Login;

