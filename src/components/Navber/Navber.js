import React from 'react'
import '../Navber/navber.css'
import { Container,Button, Form ,Nav,Navbar,NavDropdown } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navber = () => {
  return (
    <>
        <section id='nav'>
          
                <Navbar expand="lg">
                <Container px-0>
                        <Navbar.Brand href="/"> <img src='images/logos.png'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                    <div className="menuitem ">
                    <Nav className="justify-content-center my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="">Flight</Nav.Link>
                        <Nav.Link href="">Hotel</Nav.Link>
                        <Nav.Link href="">Holiday</Nav.Link>
                        <Nav.Link href="">Blog</Nav.Link>
                        <NavDropdown title="Visa" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Visa Application</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Visa Gruide
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">News & Media</Nav.Link>
                        <Nav.Link href="">Promotions</Nav.Link>
                    </Nav>
                    </div>
                    <Form className="icon">
                       <p> <Link to={"/login"}><FaUserCircle/></Link> </p>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </section>
    </>
  )
}
