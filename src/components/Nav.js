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
              {/* <NavLink to="/" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>Home</NavLink> */}
              {/* <NavLink to="/" className="inactive" activeClassName="active" exact={true}>Home</NavLink> */}
              </NavItem>
              <NavItem>
              {/* <NavLink to="/add" className="inactive" activeClassName="active" exact={true}>Add Protege</NavLink> */}
              </NavItem>
            </Nav>
          </Navbar>
      );
    }
  }