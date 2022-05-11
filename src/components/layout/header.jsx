import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../resources/logo2.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <Navbar className="personalizedNavbar  p-0" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="m-0 p-0">
            <Image className="logo m-0" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
            >
              <Nav.Link className="navbarColor" href="/">
                Inicio
              </Nav.Link>
              <Nav.Link className="navbarColor" href="#action1">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link className="navbarColor nav_login" href="/login">
                Login
              </Nav.Link>

              <NavDropdown
                className="navbarColor"
                title="Menú"
                id="navbarScrollingDropdown"
              >
                
                <NavDropdown.Item href="#action3">
                  Comidas Calientes
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action4">
                  Comidas Frias
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">Postres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">Bebidas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                {" "}
                <FontAwesomeIcon icon={faCartShopping} />{" "}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
