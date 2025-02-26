import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";
import "./DynamicNavbar.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const DynamicNavbar = ({ userRole }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: "bold" }}>
          Flash
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* Common navigation links can be added here */}
          </Nav>

          {userRole === "guest" && (
            <div>
              <Button variant="outline-secondary" href="/user" style={{ marginRight: "20px" }}>
                Sign Up As?
              </Button>
            </div>
          )}

          {(userRole === "shopkeeper" || userRole === "user") && (
            <>
              <Form className="d-flex mx-auto search-form">
                <FormControl
                  type="search"
                  placeholder="Search Location"
                  className="me-2 search-input"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              {userRole === "user" && (
                <>
                  <IconButton aria-label="cart" className="ms-2">
                    <StyledBadge badgeContent={5} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                  <IconButton aria-label="notifications" className="ms-2">
                    <StyledBadge badgeContent={99} color="secondary">
                      <NotificationsIcon />
                    </StyledBadge>
                  </IconButton>
                </>
              )}

              <NavDropdown title="Hi, User" id="navbarScrollingDropdown" className="ms-2">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Bookmarks</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Reviews</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

DynamicNavbar.propTypes = {
  userRole: PropTypes.oneOf(["guest", "shopkeeper", "user"]).isRequired,
};

export default DynamicNavbar;
