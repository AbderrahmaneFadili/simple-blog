import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand={"sm"} className="mb-3 navbar-dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Blog
        </NavLink>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              <NavLink className="nav-link" to="/">
                Blog
              </NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link" to="/new">
                New post
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
