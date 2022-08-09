import {React} from "react";
// import { Link } from 'react-router-dom';
import "./IndexNavbar.css";

// import Avatar from '@mui/material/Avatar';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'



  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  

const IndexNavbar = () => {

    return (

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: "Bold"}}>
            Flash
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              
              <Nav.Link href="#" disabled>Link</Nav.Link> */}
            </Nav>
            <div className="center-block">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Location"
                  className="me-2 mx-auto "
                  aria-label="Search"
                />
                
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
            


            {/* <IconButton aria-label="cart" style={{leftMargin: '100px'}}>
              <StyledBadge badgeContent={5} color="secondary" sx={{mr: 2}}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={99} color="secondary" sx={{mr: 2}}>
                <NotificationsIcon/>
              </StyledBadge>
            </IconButton>

            <NavDropdown title="Hi, User" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Bookmarks</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Reviews</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default IndexNavbar;