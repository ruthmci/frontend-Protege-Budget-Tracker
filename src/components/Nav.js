import React from 'react';
// import logo from '../MYOB_logo_RGB.jpg';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';

  export default class Navigation extends React.Component {
    render() {    
      return (
          <Navbar className="block-example border-bottom border-grey">
            <NavbarBrand href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/MYOB_Logo.png/100px-MYOB_Logo.png"/></NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add"><Alert color="light">Add Protege</Alert></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
      );
    }
  }