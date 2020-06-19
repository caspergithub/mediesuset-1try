import React, { useState } from 'react';
import Logo from '../../../images/mediesusetlogo.png';
import routes from '../../Router/routes';

function Nav() {
  return (
    <Navbar>
      <img src={Logo} alt="website logo" className="websitelogo"></img>
      <li className="nav-item"><a href="#" className="buyticket">KØB BILLET</a></li>
      <li className="nav-item"><a href="#" className="topnav-button">NYHEDER</a></li>

      <NavItem icon="EVENTS">

        <DropdownMenu />

      </NavItem>

      <li className="nav-item"><a href="#" className="topnav-button">CAMPS</a></li>
      <li className="nav-item"><a href="#" className="topnav-button">PRAKTISK INFO</a></li>
      <li className="nav-item"><a href="#" className="topnav-button">LOGIN</a></li>
      <li className="nav-item"><a href="#" className="topnav-button fa fa-search"></a></li>
    </Navbar>
  );
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem>PROGRAM</DropdownItem>
      <DropdownItem>LINE-UP</DropdownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default Nav;
