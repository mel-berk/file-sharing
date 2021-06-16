import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar2() {
  return (
    <div>
        <Navbar bg="light" expand="sm">
        <Navbar.Brand as={Link} to="/">
            WDS Drive
        </Navbar.Brand>
        <Nav>
            <Nav.Link as={Link} to="/login" class="ml-auto">
            Login
            </Nav.Link>
        </Nav>
        </Navbar>
        <section class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 order-2 order-lg-1">
                    <h1>Bootstrap Template by Buddy</h1>
                    <p class="lead">This is where our catchy phrase should come! Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. </p>
                    <p class="lead">Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. </p>
                    <p class="lead">Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. </p>                </div>
        </div>
        </section>
 </div>
  )
}
