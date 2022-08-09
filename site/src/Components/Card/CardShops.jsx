import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CardShops(props) {
  return (
    
        <Card sx={{ maxWidth: 400, mt:10, ml:10, mr:10}} className='card-card'>
          {/* <Link to={props.to} style={{ textDecoration: 'none' }}> */}
            <CardMedia
              component="img"
              height="250"
              image={props.imageURI}
              alt={props.alt}
            />
          {/* </Link> */}
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Roboto'}}>
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Typography size="small">{props.status} : {props.time}</Typography> */}
            {/* <Button size="small">Learns More</Button> */}
            <Button variant="outline-primary"  href={props.to} style={{ float: "right",marginLeft: "10px", borderRadius: "50px"}}>Check <ArrowRightAltIcon /></Button>

          </CardActions>
        </Card>
    
  );
}

export default CardShops;