import * as React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

{
  /* <nav className="navbar">
                <div className="app-name-header">
                    <NavLink className="app-brand" to="/">Home</NavLink>
                </div>
                <ul className="navbar-ul">
                    <li><NavLink className="link" activeClassName="is-active" to="/post">POST</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/user">USER</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/register">REGISTER</NavLink></li>
                    <li><NavLink className="link" activeClassName="is-active" to="/login">LOGIN</NavLink></li>
                </ul>
            </nav> */
}
const NavbarHeader: React.FC<any> = () => {
  return (
    <Navbar>
      <Navbar.Brand><NavLink className="app-brand" to="/">Home</NavLink></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><NavLink className="link" activeClassName="is-active" to="/post">POST</NavLink></Nav.Item>
          <Nav.Item><NavLink className="link" activeClassName="is-active" to="/user">USER</NavLink></Nav.Item>
          <Nav.Item><NavLink className="link" activeClassName="is-active" to="/register">REGISTER</NavLink></Nav.Item>
          <Nav.Item><NavLink className="link" activeClassName="is-active" to="/login">LOGIN</NavLink></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
