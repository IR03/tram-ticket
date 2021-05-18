import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    return (
        <Navbar variant="dark" expand="lg">
            <Container >
                <Navbar.Brand className="py-0" style={{ fontSize: "1.5rem", fontWeight: "bold" }} as={Link} to="/">Tram Ticket</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link as={Link} to="/" style={{ fontWeight: "500" }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination" style={{ fontWeight: "500" }}>Destination</Nav.Link>
                        {loggedInUser.email ?
                            <>

                                <Nav.Link>{loggedInUser.name}</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;