import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';

function ShopSpecificCard(props) {
  return (
        <Container sx={{ maxWidth: 400, mt:5, ml:5, mr:5}}>
          <Card sx={{ maxWidth: 400, mt:5, ml:5}} style={props.status === 'Closed' ? {pointerEvents: "none", opacity: "0.4"} : {}} className='card-card'>
            {/* <Link to={props.to} style={{ textDecoration: 'none' }}> */}
              <CardMedia
                component="img"
                height="200"
                // image="/static/images/cards/contemplative-reptile.jpg"
                image={props.imageURI}
                alt={props.alt}
              />
            {/* </Link> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Roboto'}}>
                {/* Lizard */}
                {props.name}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary"> */}
                {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica */}
                {/* Ratings : {props.ratings}
              </Typography> */}
            </CardContent>
            <CardActions>
              {/* <Typography size="small">{props.status} : {props.time}</Typography> */}
              {/* <Button size="small">Learns More</Button> */}
            </CardActions>
            <Grid container spacing={0}>
                  <Grid item xs={6} md={3}>
                      <Button
                      type="submit"
                      size = "small"
                      variant="contained"
                      href = {props.to}
                      sx={{ maxWidth: 2 ,mt: 3, mb: 2, ml:3, bgcolor:"success.main" }}
                      >
                      {props.status}
                      </Button>
                  </Grid>

                  <Grid item xs={6} md={3}>
                      <Button
                      type="submit"
                      size = "small"
                      variant="contained"
                      sx={{ maxWidth: 2 ,mt: 3, mb: 2, ml:17, bgcolor: "warning.main" }}
                      >
                      ★ {props.ratings}
                      </Button>
                  </Grid>

              </Grid>

          </Card>
        </Container>
        
    
  );
}

export default ShopSpecificCard;