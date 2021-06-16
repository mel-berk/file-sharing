import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        M&S
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/recieve">
          download
        </Nav.Link>
        <Nav.Link as={Link} to="/send">
          Send
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
