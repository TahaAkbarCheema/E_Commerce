import React from 'react'
import '../css/style.css'
import { Navbar, Container, NavDropdown, Nav, Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FcServices } from "react-icons/fc";

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
      <Container fluid>
        <Navbar.Brand style={{ fontSize: '35px', fontWeight: 'bold' }}><b>Amazon</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: '25px', fontWeight: 'bold' }}
            navbarScroll


          >
            <Nav.Link >
              <NavLink to="/"> <b>{<IoHome />} </b>Home</NavLink>
            </Nav.Link>

            <Nav.Link >
              <NavLink to="/Services"> <b>{<FcServices />}</b> Services</NavLink>
            </Nav.Link>

            <Nav.Link >
              <NavLink to="/Contactus"> <b>{<IoMdContact />}</b>Contact Us</NavLink>
            </Nav.Link>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
