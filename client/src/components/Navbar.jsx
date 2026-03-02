import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={{cursor:"pointer"}}>
          SocialApp
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={logout}>Logout</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
