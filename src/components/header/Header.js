import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button  from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import  Nav  from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signin');
      };
    
      const handleRegisterClick = () => {
        navigate('/signup');
      };
      
      
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/>gold

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                    style={{maxHeight : '100px'}}
                    navbarScroll
                    >
                        <NavLink className="nav-link" to={localStorage.getItem("token") ? "/movies" : "/signin"}>Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>

                </Nav>
                <Button variant="outline-info" className="me-2" onClick={handleLoginClick}>Login</Button>
                <Button variant="outline-info"  onClick={handleRegisterClick}>Register</Button>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header