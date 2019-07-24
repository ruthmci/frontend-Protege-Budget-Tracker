import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from 'reactstrap';

  export default class Navigation extends React.Component {
    render() {    
      return (
          <Navbar className="block-example border-bottom border-grey">
            <NavbarBrand href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/MYOB_Logo.png/100px-MYOB_Logo.png"/></NavbarBrand>
            <Nav>
            <NavItem ></NavItem>
              <NavItem>
                <NavLink href="/" style={{color:"#8241AA"}}><b>Home</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add" style={{color:"#8241AA"}}><b>Add Protege</b></NavLink>
              </NavItem>
            </Nav>
          </Navbar>
      );
    }
  }