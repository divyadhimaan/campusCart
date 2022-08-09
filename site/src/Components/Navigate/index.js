import React from "react";
import { Card, CardGroup, Button } from 'react-bootstrap';


import onlineShop from './../../assets/img/online-shop.jpg';
import selfPickup from './../../assets/img/self-pickup.jpg';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Navigate() {
  return (
    <CardGroup style={{marginTop:"180px"}}>
      {/* <Link to="shops" style={{ textDecoration: "none", color: "Black" }}> */}
        <Card style={{ margin: "10px", height:"150px",  width: "30rem", borderRadius: "2rem" }}>
          <Card.Img
            variant="top"
            src={onlineShop}
            style={{
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
          />
          <Card.Body>
            <Card.Title>Order Online </Card.Title>
            <Card.Text>Stay Home and Order at your doorsteps.</Card.Text>
            <Button variant="outline-primary" size="lg" href='/shops' style={{ float: "right",marginLeft: "20px", borderRadius: "50px"}}>Visit Shops <ArrowRightAltIcon /></Button>
          </Card.Body>
        </Card>
      {/* </Link> */}
      {/* <Link
        to="select-location"
        style={{ textDecoration: "none", color: "Black" }}
      > */}
        <Card
          style={{ marginTop: "10px", height:"150px", width: "30rem", borderRadius: "2rem" }}
        >
          <Card.Img
            variant="top"
            src={selfPickup}
            style={{
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
              height: "380px",
            }}
          />
          <Card.Body>
            <Card.Title>Self Pickup</Card.Title>
            <Card.Text>Order and Pick the delivery yourself</Card.Text>
            <Button variant="outline-primary" size="lg" href='/shops' style={{ float: "right",marginLeft: "20px", borderRadius: "50px"}}>Check for delivery <ArrowRightAltIcon /></Button>
            
          </Card.Body>
        </Card>
      {/* </Link> */}
    </CardGroup>
  );
}

export default Navigate;
