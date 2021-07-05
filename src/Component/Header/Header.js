import React from 'react';
import "./Header.css";
import {Nav,Navbar,NavDropdown,} from 'react-bootstrap';
import logo from "../../logo/logo.png";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <div className="header">
  <Navbar bg="" expand="lg">
  <img className="logo" src={logo} alt=""></img>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      
      navbarScroll
    >
     
      <NavDropdown className="" title="All" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <div className="header-search">
    <input className="header-input" type="text"></input>
    <SearchIcon className="search-icon"></SearchIcon>
    </div>
    <div className="header-nav">
      <div className="header-option">
      <span className="header-one">Hello,Sign in</span>
      <span className="header-two">Account & Lists</span>
      </div>
      <div className="header-option">
      <span className="header-one">Returns</span>
      <span className="header-two">& Orders</span>
      </div>
      <div className="header-option">
      <span className="header-one">Hello,Sign in</span>
      <span className="header-two">Account & Lists</span>
      </div>
    </div>
   
  </Navbar.Collapse>
</Navbar>

    </div>
  );
};

export default Header;