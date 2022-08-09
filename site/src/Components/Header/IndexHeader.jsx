// import { Container } from "reactstrap";
import './IndexHeader.css';
// import CarouselCard from './../CarouselCard';
import { Container, Image, Button, Form, FormControl } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Navigate from '../Navigate';

import header from './../../assets/img/header.png';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

function IndexHeader() {

    return (
        <div style={{ backgroundColor: '#a1ffce', background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
            <div>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{marginLeft: '100px'}}>
                    <h2 style={{ color: "#222831", marginTop: "50px", fontSize: "56px", fontFamily: "Roboto Black 900"}}>Find everything <br></br> right at <br></br> your doorsteps.</h2>
                    <p style={{color: "#222831", marginTop: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Form className="d-flex" style={{width: "500px", borderRadius: "50px"}} >
                        <FormControl
                        type="search"
                        placeholder="Search Location"
                        className="me-2 "
                        aria-label="Search"
                        />
                    </Form>
                    <div style={{marginLeft: "10px"}}>
                        <Button variant="outline-info" size="lg" href='/signup-user' style={{marginTop: "20px", marginLeft: "20px", borderRadius: "50px"}}>Customer</Button>
                        
                        <Button variant="outline-primary" size="lg" href='/signup-shop' style={{marginTop: "20px", marginLeft: "20px", borderRadius: "50px"}}>Shopkeeper</Button>
                    </div>
                    
                </Grid>
                <Grid item xs={4} >
                    <Image src={header} fluid style={{marginTop: "20px",height: "500px", width: "500px"}}/>
                </Grid>
            </Grid>
            
            
            </div>
            <Container style={{borderRadius: '8px', marginTop: "10px", backgroundColor: 'white'}}>
                <div className="b__content" >
                    <div className="b__title">
                        


                        <Navigate />



                        
                    </div>
                </div>
            </Container>
        </div>
        

        
        

    );
  }
  
  export default IndexHeader;
  