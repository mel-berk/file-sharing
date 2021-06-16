import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar2() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        M&S
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/login" class="ml-auto">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
