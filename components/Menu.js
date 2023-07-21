import React from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
    return (
        <div className="menu">
            <Navbar className="navbar">
                <Container>

                    <Navbar.Brand href="#home">
                        <img src="/assets/logo.png" alt="logo" className="main-logo"/>
                    </Navbar.Brand>

                    <Nav className="links-block">
                        <Nav.Link href="#home">Inscribe</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
}