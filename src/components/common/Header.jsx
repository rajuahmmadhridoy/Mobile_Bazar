import React from 'react';
import { Navbar, Container, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { AiOutlinePhone, AiTwotoneMail, AiOutlineSearch } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import logo from 'assets/images/fvaly.png';
const Header = () => {
    return (
        <div className="header_component">
            <div className="top_header mt-2">
                <Container className="d-flex justify-content-between">
                    <ul className="list-unstyled d-flex gap-3">
                        <li>
                            <span className="text-primary pe-2">
                                <AiOutlinePhone />
                            </span>
                            <a href="tel:00625981">00625981</a>
                        </li>
                        <li>
                            <AiTwotoneMail />
                            <a href="mail-to:support@mobilebazare.com">support@mobilebazare.com</a>
                        </li>
                    </ul>
                    <div>
                        <a href="">
                            <BsPhone />
                            Save big on oue app!
                        </a>
                    </div>
                </Container>
            </div>
            {/* end_to_header */}
            {/* start_middle-hheader */}
            <div className="middle_header mt-2">
                <Container>
                    <div className="d-flex align-items-center ">
                        <img className="logo" src={logo} alt="" />
                        <InputGroup className="ms-3">
                            <FormControl
                                className="border border-primary"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                                className="bg-primary text-white border border-primary"
                            >
                                <AiOutlineSearch />
                            </Button>
                        </InputGroup>
                        <ul className="d-flex list-unstyled gap-3 ps-3 icon-list">
                            <li>
                                <FiShoppingBag />
                            </li>
                            <li>
                                <BiUser />
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            {/* end_middle-hheader */}
            <div className="bottom-header mt-2">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Categories</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">News feed</Nav.Link>
                            <Nav.Link href="#features">Merchant Zone</Nav.Link>
                            <Nav.Link href="#pricing">Help</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
