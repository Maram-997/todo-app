import React from 'react';
import Settings from './context/settingsContext.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import Footer from './components/footer.js';
import SettingForm from './components/SettingForm.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Settings>
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
          </Settings>
        </Switch>
      </Router>
    );
  }
}