
// import CardShops from './CardShops';
import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';
import ShopSpecificCard from '../ShopSpecificCard';
import UserNavbar from '../../Navbar/UserNavbar'
import Typography from '@mui/material/Typography';

const Stationary = () => {


    return (
        <div style = {{height:'800px', backgroundColor: '#a1ffce',background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
            <UserNavbar />

            <Typography variant="h4" component="h4" sx ={{ pt: 5, pl:6, fontFamily: 'Roboto'}}>
              All the available Stationary Shops:
            </Typography>

            <Grid container spacing={0}>
                <Grid item xs={6} md={3}>
                    <ShopSpecificCard
                      imageURI = "https://images.unsplash.com/photo-1531496020551-4246929e5a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80"
                      alt = ""
                      name = "Shop1"
                      ratings = "5.0"
                      to = "shop-page"
                      status = "Open"
                      // time = "10:00am - 6:00pm"
                    />
                </Grid>
              
              
              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1612190656723-c409e75ea4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt = ""
                    name = "Shop2"
                    ratings = "4.2"
                    to = "shop-page"
                    status = "Closed"
                    // time = "10:00am - 8:00pm"
                  />
              </Grid>


              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    alt = ""
                    name = "Shop3"
                    ratings = "3.6"
                    to = "shop-page"
                    status = "Open"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>

              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"
                    alt = ""
                    name = "Shop4"
                    ratings = "4.2"
                    to = "shop-page"
                    status = "Open"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>

            </Grid>


        </div>
    );
}

export default Stationary;