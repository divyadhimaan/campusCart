import React, { useState } from 'react';
import IndexNavbar from '../Navbar/IndexNavbar';
// import IndexHeader from '../Header/IndexHeader';
import { Grid} from '@mui/material';
import shop from './../../assets/img/shop.png';
import user from './../../assets/img/user.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



import { Card, Button, Container } from 'react-bootstrap';

function User() {

    const [isCustomer, setIsCustomer] = useState(false);
    const [isShopowner, setIsShopkeeper] = useState(false);  

   

    return (
        <div style={{ backgroundColor: '#a1ffce', background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
        <IndexNavbar />
        <Container >
            <Grid container spacing={2} style={{marginLeft:"80px",}}>
                <Grid item xs={6} >
                    <Card style={{ margin: "30px", width: "400px",height:"400px", borderRadius: "2rem" }}>
                        <Container style={{height:"250px",backgroundColor: "#b8dde9",}}>
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
                            <Card.Title style={{marginTop:"20px",textAlign: "center", fontSize:"30px", fontWeight:"bold"}}>Customer </Card.Title>
                            <Button 
                                variant="outline-primary" 
                                size="lg" 
                                onClick={(e) => setIsCustomer((prevIsSignup) => !prevIsSignup)} 
                                href='/signup-user' 
                                style={{ marginLeft: "90px", marginTop:"30px"}}
                            >
                                Continue <ArrowRightAltIcon />
                            </Button>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card style={{ margin: "30px",width: "400px",height:"400px", borderRadius: "2rem" }}>
                        <Container style={{height:"200px",backgroundColor: "#b8dde9",}}>
                            <Card.Img
                                variant="top"
                                src={shop}
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
                            <Card.Title style={{marginTop:"20px",textAlign: "center", fontSize:"30px", fontWeight:"bold"}}>ShopOwner </Card.Title>
                            <Button 
                                variant="outline-primary" 
                                size="lg" 
                                onClick={(e) => setIsShopkeeper((prevIsSignup) => !prevIsSignup)} 
                                href='/signup-shop' 
                                style={{ marginLeft: "90px", marginTop:"30px"}}
                            >
                                 Continue <ArrowRightAltIcon />
                            </Button>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid>
        </Container>

            
        </div>
    )
}

export default User;
