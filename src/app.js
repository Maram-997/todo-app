import React from 'react';
import Settings from './context/settingsContext.js';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
//  import 'normalize.css';
//  import '@blueprintjs/core/lib/css/blueprint.css'
//  import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import Footer from './components/footer.js';
export default class App extends React.Component {
  render() {
    return (
      <Settings>
        <Header/>
            <ToDo />
         <Footer/>   
      </Settings>
      
    );
  }
}