import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
};

export const LoginContext = React.createContext();

function LoginProvider(props){

//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       can: this.can,
//       login: this.login,
//       logout: this.logout,
//       user: {capabilities:[]},
//     };
//   }
const [loggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({});

  can = (capability) => {
    return this?.state?.user?.capabilities?.includes(capability);
  }

  login = (username, password) => {
    if (testUsers[username]) {
      // Create a "good" token, like you'd get from a server
      const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      this.validateToken(token);
    }
  }

  logout = () => {
    this.setLoginState(false, null, {});
  };

  validateToken = token => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    //this.setState({ token, loggedIn, user });
    setLoggedIn(loggedIn);
    setUser(user);
  };

  
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.validateToken(token);
  }, [])

    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  

}
export default LoginProvider;