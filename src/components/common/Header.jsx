import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
const Header = () => {
    return (
        <div className="header_component">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="log">
                        <a href="">NEWSLETTER</a>
                    </div>
                    <div className="signup">
                        <p>
                            Want the latest<span>MOHO</span>
                            <span>news?</span>
                            <a href="">Sign up!</a>
                        </p>
                    </div>
                    <div className="subscrive">
                        <div className="icon1">
                            <FaBeer />
                        </div>
                        <div className="icon2">
                            <FaBeer />
                        </div>
                        <input type="email" placeholder="your email" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
