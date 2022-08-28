import React from 'react'
import { NavLink } from 'react-router-dom'

import BNavbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <BNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <BNavbar.Brand href="#home">Mercado</BNavbar.Brand>
                <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    )
}

export default Navbar