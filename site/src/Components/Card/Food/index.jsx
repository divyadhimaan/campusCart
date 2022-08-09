// import CardShops from './CardShops';
import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';
import ShopSpecificCard from '../ShopSpecificCard';
import UserNavbar from '../../Navbar/UserNavbar';
import Typography from '@mui/material/Typography';

const Food = () => {


    return (
        <div style = {{height:'1200px', backgroundColor: '#a1ffce',background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
            <UserNavbar />
            <Typography variant="h4" component="h4" sx ={{ pt: 5, pl:5, fontFamily: 'Roboto'}}>
              All the available Food Shops:
            </Typography>

            <Grid container spacing={0}>
                <Grid item xs={6} md={3}>
                    <ShopSpecificCard
                      imageURI = "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
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
                    imageURI = "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80"
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
                    imageURI = "https://images.unsplash.com/photo-1456511280309-a5312dce4f38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
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
                    imageURI = "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt = ""
                    name = "Shop4"
                    ratings = "4.2"
                    to = "shop-page"
                    status = "Open"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>

              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80"
                    alt = ""
                    name = "Shop5"
                    ratings = "2.2"
                    to = "shop-page"
                    status = "Closed"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>

              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                    alt = ""
                    name = "Shop6"
                    ratings = "4.6"
                    to = "shop-page"
                    status = "Open"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>
              <Grid item xs={6} md={3}>
                  <ShopSpecificCard
                    imageURI = "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"
                    alt = ""
                    name = "Shop7"
                    ratings = "3.8"
                    to = "shop-page"
                    status = "Closed"
                    // time = "10:00am - 6:00pm"
                  />
              </Grid>

            </Grid>


        </div>
    );
}

export default Food;