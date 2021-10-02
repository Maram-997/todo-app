import React, {useState} from 'react';
import {When} from 'react-if';
import { useContext } from "react";
//import { context } from './context.js';
import { LoginContext } from "./context";

function login (props)  {
  //static contextType = LoginContext;

  const context = useContext(LoginContext);

  // constructor(props) {
  //   super(props);
  //   this.state = { username: '', password: '' };
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

let inputSubmit = e =>{
  setPassword(e.target.value)
}
let passwordSubmit = e =>{
  setUsername(e.target.value)
}

 let handleSubmit = async e => {
    e.preventDefault();
   await context.login(username,password);
    window.location.href="/"
  };
    return (
      <>
        <When condition={context.loggedIn}>
          <button onClick={context.logout}>Log Out</button>
        </When>

        <When condition={!context.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              type='text'
              nChange={inputSubmit }
            />
            <input
              placeholder="password"
              name="password"
              type='password'
              onChange={passwordSubmit}
            />
            <button>Login</button>
          </form> 
        </When>
      </>
    );
  
}

export default login;