import CardShops from './CardShops';
import Grid from '@mui/material/Grid';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <div >
            <Grid container spacing={0}>
                <Grid item xs={6} md={4}>
                  {/* <Link to='food-shops' style={{ textDecoration: 'none' }}> */}
                    <CardShops
                      imageURI = "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                      alt = ""
                      name = "Food Shops"
                      content = "Address"
                      // button = "Check ->"
                      to = "/food-shops"
                      // status = "Open"
                      // time = "10:00am - 6:00pm"
                    />
                  {/* </Link> */}
                </Grid>
              
              
              <Grid item xs={6} md={4}>
                {/* <Link to='/stationary-shops' style={{ textDecoration: 'none' }}> */}
                  <CardShops
                    imageURI = "https://images.unsplash.com/photo-1568871391149-449702439177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80"
                    alt = ""
                    name = "Stationary Shops"
                    content = "Address"
                    to = "/stationary-shops"
                    // status = "Closed"
                    // time = "10:00am - 8:00pm"
                  />
                {/* </Link> */}
              </Grid>


              <Grid item xs={6} md={4}>
                {/* <Link to='/other-shops' style={{ textDecoration: 'none' }}> */}
                  <CardShops
                    imageURI = "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
                    alt = ""
                    name = "Other Shops"
                    content = "Address"
                    to = "/other-shops"
                    // status = "Closed"
                    // time = "10:00am - 6:00pm"
                  />
                {/* </Link> */}
              </Grid>

            </Grid>


        </div>
    );
}

export default Cards;