import React from 'react';
import logo from '../../../src/assets/logo.png';

import './index.css'

function SignIn() {

  return (
    <>
      <div className="sign-in-page">
        <img src={logo} alt="logo" />
        <input type="text" defaultValue="test@email.com" />
        <input type="password" defaultValue="12345678" />
        <button onClick={() =>{}}>
          Entrar
        </button>
      </div>
    </>
  )
};

export default SignIn;