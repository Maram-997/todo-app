import React from 'react';
import {When} from 'react-if';
import { useContext } from "react";


import { LoginContext } from "./context";

function Auth(props){
  //static contextType = LoginContext;
  const context = useContext(LoginContext);


    const isLoggedIn = context.loggedIn;
    const canDo = props.capability ? context.can(props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {props.children}
      </When>
    );
  }


 export default Auth;

