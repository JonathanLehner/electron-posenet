import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link
  } from "react-router-dom";

function NavBar (props) {
    const {isLoggedIn, username, openLoginModal, logout} = props;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Poseguard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            {isLoggedIn ? 
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/settings/account">Account settings</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/settings/reminders">Reminder Settings</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/settings/ui">UI Settings</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/statistics">Statistics</Link></NavDropdown.Item>
            </NavDropdown> : ""}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {isLoggedIn ? 
            <Navbar.Text>
              Signed in as: {username} - <a onClick={logout}>Logout</a>
            </Navbar.Text> :
            <Navbar.Text>
              <a onClick={openLoginModal}>Login</a>
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Navbar>
    )
  }

export default NavBar;