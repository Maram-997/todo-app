import React, { useContext } from "react";
import SettingsContext from './context/settingsContext.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import Footer from './components/footer.js';
import SettingForm from './components/SettingForm.js';
import { LoginContext } from './context/loginContext';
import { If, Else, Then } from "react-if";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Auth from "./components/auth/auth";
import LoginProvider from "./components/auth/context";
import Login from "./components/auth/login";

export default function App(props) {

  const context = useContext(LoginContext);

  return (
    <>
      <If condition={context.loggedIn == true}>
        {console.log(context)}
       <Then>
       <Router>
        <Switch>
          <SettingsContext>
            <Route exact path="/">
              <Header />
              <ToDo />
              <Footer />
            </Route>
            <Route path="/form">
              <Header />
              <SettingForm />
              <Footer />
            </Route>
          </SettingsContext>
        </Switch>
      </Router>
       </Then>    
        <Else>
          <LoginProvider>
            <Login />
          </LoginProvider>
        </Else>
      </If>
    </>
  );

}