import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';

function login (props)  {
  //static contextType = LoginContext;
  const context = useContext(SettingsContext);
  // constructor(props) {
  //   super(props);
  //   this.state = { username: '', password: '' };
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
    context.login(username, password);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };
    return (
      <>
        <When condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </When>

        <When condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
    );
  
}

export default login;