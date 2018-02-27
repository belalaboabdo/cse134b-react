import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

const Header = ({loading}) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Gameflix</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <Link to="/about"> Community </Link>
          </NavItem>
       
          <NavItem eventKey={2} href="#">
            Profile
          </NavItem>

          <NavItem eventKey={2} href="#">
            Messages
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Settings
          </NavItem>
          <NavItem eventKey={2} href="#">
            Log out
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
