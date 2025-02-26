import React from "react";


import { Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";

import user from "./../../../assets/img/user.png";
import AddShopImage from "./../../../assets/img/add-shop.png";


import { Card, Button, Container } from "react-bootstrap";
import DynamicNavbar from "../../Navbar/DynamicNavbar";

function ShopDashboard() {
  // const [isCustomer, setIsCustomer] = useState(false);
  // const [isShopowner, setIsShopkeeper] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#a1ffce",
        background: "linear-gradient(to right, #a1ffce, #faffd1)",
      }}
    >
      <DynamicNavbar userRole={'shopkeeper'} />
      <Container>
        <Grid container spacing={2} style={{ marginLeft: "80px" }}>
          <Grid item xs={6}>
            <Card
              style={{
                margin: "30px",
                width: "400px",
                height: "400px",
                borderRadius: "2rem",
              }}
            >
              <Container
                style={{ height: "250px" }}
              >
                <Card.Img
                  variant="top"
                  src={user}
                  style={{
                    marginTop: "20px",
                    marginLeft: "80px",
                    // marginBottom: "30px",
                    height: "160px",
                    width: "160px",
                    // box-shadow: 0 4px 8px 0 #a5aaad, 0 4px 16px 0 #a5aaad;
                  }}
                />
              </Container>
              <Card.Body>
                <Card.Title
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Edit Shop{" "}
                </Card.Title>
                <Button
                  variant="outline-primary"
                  size="lg"
                  // onClick={(e) =>
                  //   setIsShopkeeper((prevIsSignup) => !prevIsSignup)
                  // }
                  href="/adding-shop"
                  style={{ marginLeft: "130px", marginTop: "30px", borderRadius: "100px" }}
                >
                  <EditIcon />
                </Button>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              style={{
                margin: "30px",
                width: "400px",
                height: "400px",
                borderRadius: "2rem",
              }}
            >
              <Container
                style={{ height: "200px" }}
              >
                <Card.Img
                  variant="top"
                  src={AddShopImage}
                  style={{
                    marginTop: "20px",
                    marginLeft: "90px",
                    height: "160px",
                    width: "160px",
                    // box-shadow: 0 4px 8px 0 #a5aaad, 0 4px 16px 0 #a5aaad;
                  }}
                />
              </Container>

              <Card.Body>
                <Card.Title
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Add Shop
                </Card.Title>
                <Button
                  variant="outline-primary"
                  size="lg"
                  // onClick={(e) =>
                  //   setIsShopkeeper((prevIsSignup) => !prevIsSignup)
                  // }
                  href="/adding-shop"
                  style={{ marginLeft: "130px", marginTop: "30px", borderRadius: "100px" }}
                >
                  <AddIcon />
                </Button>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ShopDashboard;
