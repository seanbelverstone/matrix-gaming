import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "./style.css";
import matrixImage from "../../images/matrixLogo.jpg";
import whiteBurger from "../../images/whiteBurger.jpg";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/"><img src={matrixImage} alt="The Matrix Gaming Logo" id="matrixLogo"/></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tournaments">Tournaments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/matrixAcademy">MatrixAcademy</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Groups
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="#">South West Gamers UK</NavLink>
                </DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem>
                  <NavLink href="#">South East Gamers UK</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/subscribe">Subscribe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;