import React, { useState,useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
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

let  can = (capability) => {
    return state?.user?.capabilities?.includes(capability);
  }

 let login = (username, password) => {
    if (testUsers[username]) {
      // Create a "good" token, like you'd get from a server
      const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      validateToken(token);
    }
  }

 let logout = () => {
    setLoginState(false, null, {});
  };

let  validateToken = token => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };

 let setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    //this.setState({ token, loggedIn, user });
    setLoggedIn(loggedIn);
    setUser(user);
  };

  
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
   validateToken(token);
  }, [])

  const state = {
    loggedIn,
    login,
    logout,
    user,
    can
}

    return (
      <LoginContext.Provider value={state}>
        {props.children}
      </LoginContext.Provider>
    );
  

}
export default LoginProvider;