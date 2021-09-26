import React from "react";

function Header() {
  return (
    <>
      <nav className="bp3-navbar .modifier bp3-dark" >
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">TO-DO</div>
          
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
          <span className="bp3-navbar-divider"></span>
          <button className="bp3-button bp3-minimal bp3-icon-user"></button>
          <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
          <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
      </nav>
    </>
  );
}

export default Header;