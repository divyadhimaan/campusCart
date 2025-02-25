import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CardShops = ({ imageURI, name, content, type }) => {
  return (
    <Card sx={{ maxWidth: 400, borderRadius: '15px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="250"
        image={imageURI}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="outlined"
          href={type}
          sx={{
            borderRadius: '50px',
            textTransform: 'none',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Check <ArrowRightAltIcon sx={{ ml: 1 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardShops;
