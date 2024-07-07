import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header({onSearch}) {

  // working on the search box
  const [query, setQuery] =useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };


  const [cartItems, setCartItems] = useState([]);
  let loginUser = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(() => {
    let cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  },[]);

  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              localStorage.getItem('userInfo') ?
              (loginUser['email'] === 'olugbengaraymond20@gmail.com') ?
                <>
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                  <Nav.Link as={Link} to="/cart">Cart <sup>{cartItems.length}</sup></Nav.Link>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </>
              :
                <>
                  <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={Link} to="/cart">Cart <sup>{cartItems.length}</sup></Nav.Link>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </>
              :
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>

            }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              value={query}
              onChange={handleInputChange}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;