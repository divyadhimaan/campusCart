import React from "react";
import { Grid, Button, Container } from "@mui/material";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Navigate from "./../Navigate";
import header from "../../assets/img/header.png";
import "./IndexHeader.css"; // Import the CSS file

function IndexHeader() {
  return (
    <div className="index-header">
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={6} className="index-header__left">
          <h2 className="index-header__title">
          Your essentials, just a doorstep away.
          </h2>
          <p className="index-header__description">
          Seamless convenience at your fingertips—everything you need, right here.
          </p>

          {/* Search Bar */}
          <Form className="index-header__search">
            <FormControl
              type="search"
              placeholder="Search Location"
              className="index-header__search-input"
            />
          </Form>

          {/* Buttons */}
          <div className="index-header__buttons">
            <Button
              variant="contained"
              className="index-header__button index-header__button--customer"
              size="large"
              href="/login-user"
            >
              Customer
            </Button>

            <Button
              variant="contained"
              className="index-header__button index-header__button--shopkeeper"
              size="large"
              href="/login-shop"
            >
              Shopkeeper
            </Button>
          </div>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={5} className="index-header__image">
          <Image src={header} fluid />
        </Grid>
      </Grid>

      {/* Bottom Container */}
      <Container className="index-header__container">
        <Navigate />
      </Container>
    </div>
  );
}

export default IndexHeader;
