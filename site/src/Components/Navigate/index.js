import React from "react";
import { Card, CardGroup, Button } from 'react-bootstrap';
import onlineShop from './../../assets/img/online-shop.jpg';
import selfPickup from './../../assets/img/self-pickup.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Navigate.css';  // Import the CSS file

function Navigate() {
  return (
    <CardGroup className="card-group">
      
      {/* Online Order Card */}
      <Card className="card">
        <Card.Img
          variant="top"
          src={onlineShop}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title className="card-title">Order Online</Card.Title>
          <Card.Text className="card-text">
            Stay Home and Order at your doorsteps with ease.
          </Card.Text>
          <Button 
            variant="outline-primary" 
            size="lg" 
            href="/shops" 
            className="button"
          >
            Visit Shops <ArrowRightAltIcon />
          </Button>
        </Card.Body>
      </Card>

      {/* Self Pickup Card */}
      <Card className="card">
        <Card.Img
          variant="top"
          src={selfPickup}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title className="card-title">Self Pickup</Card.Title>
          <Card.Text className="card-text">
            Order and pick up your delivery yourself at your convenience.
          </Card.Text>
          <Button 
            variant="outline-primary" 
            size="lg" 
            href="/shops" 
            className="button"
          >
            Check for Delivery <ArrowRightAltIcon />
          </Button>
        </Card.Body>
      </Card>

    </CardGroup>
  );
}

export default Navigate;
