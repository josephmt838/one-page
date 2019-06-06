import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "./MainNav.scss";

export default class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <section>
        <Navbar color="light" light expand="md" id="nav">
          <NavbarBrand href="#nav">Company Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#advantages">Advantages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#features">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#testimonials">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#partners">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#prices">Prices</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <FaSearch color="gray" size="1.6em" />
              </InputGroupAddon>
              <Input placeholder="Search" />
            </InputGroup>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}
