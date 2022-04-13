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
import Logo from "../../resources/e-menu (3).png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar className="personalizedNavbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image className="logo" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"}}
              navbarScroll
            >
              <Nav.Link className="navbarColor" href="#action1">
                Inicio
              </Nav.Link>
              <Nav.Link className="navbarColor" href="#action1">
                Sobre Nosotros
              </Nav.Link>

              <NavDropdown
                className="navbarColor"
                title="Categorias"
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
