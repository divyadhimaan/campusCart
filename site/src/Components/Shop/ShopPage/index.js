import React from 'react';
import UserNavbar from "../../Navbar/UserNavbar";
import Footer from '../../Footer';
import food from "./../../../assets/img/food.jpg";
import PropTypes from 'prop-types';
import {Tabs, Tab, Box,Typography, Grid  } from '@mui/material';
import {Image, Container, ListGroup, Button} from 'react-bootstrap';
import OrderCard from './orderCards';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DirectionsIcon from '@mui/icons-material/Directions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 4 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Order Online" {...a11yProps(1)} />
            <Tab label="Menu" {...a11yProps(2)} />
            <Tab label="Reviews" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

            <h2>Overview</h2> 

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={2} >
              <ListGroup defaultActiveKey="#link1" style={{width:"180px"}}>
                  <ListGroup.Item action href="#link1">
                      Recommended
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                      Item 1
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                      Item 2
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                      Item 3
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link5">
                      Item 4
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link6">
                      Item 5
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link7">
                      Item 6
                  </ListGroup.Item>
              </ListGroup>
            </Grid>
            <Grid item xs={10} >
              <h1>Order Online</h1>
              <p> <LocationOnIcon /> Live tracking | <AccessTimeIcon /> Time</p> 
              <div className="d-grid gap-2">
                <Button variant="primary"  href='/signup-user' style={{textAlign: "left", marginTop: "5px"}}> <CheckCircleIcon /> Delivering to *Location*</Button>
              </div>
              <OrderCard />
            </Grid>
          </Grid>
            
            
        </TabPanel>
        <TabPanel value={value} index={2}>
          Shop Menu
        </TabPanel>
        <TabPanel value={value} index={3}>
          Reviews
        </TabPanel>
      </Box>
    );
  }


function ShopPage() {
    return (
        <div >
            <UserNavbar />
            <Container style={{fontFamily: "Helvetica"}}>
                <Image src={food} style={{height: '400px', width:"1366px"}} fluid />
                <h2 style={{marginTop: '10px',}}>Shop Name</h2>
                <p style={{marginTop: '10px'}}>popular food items</p>
                <p style={{marginTop: '2px'}}>Address</p>
                
                <Button variant="outline-primary" href='/signup-user' style={{marginTop: "20px", marginLeft: "20px"}}> <ReviewsIcon /> Add Review</Button>
                <Button variant="outline-primary" href='/signup-user' style={{marginTop: "20px", marginLeft: "20px"}}> <DirectionsIcon/> Direction</Button>
                <Button variant="outline-primary" href='/signup-user' style={{marginTop: "20px", marginLeft: "20px"}}> <BookmarkIcon /> Bookmark</Button>
                <Button variant="outline-primary"  href='/signup-user' style={{marginTop: "20px", marginLeft: "20px"}}> <ShareIcon /> Share</Button>

                {/* {ColorTabs()}
                {LabTabs()} */}
                {BasicTabs()}

            </Container>
            
            <Footer />
        </div>
    )
}

export default ShopPage
