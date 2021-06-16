import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        WDS Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
