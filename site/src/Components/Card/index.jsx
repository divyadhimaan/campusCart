import React from 'react';
import Grid from '@mui/material/Grid';
import CardShops from './CardShops';

// Data for the shops - this can be easily expanded or modified
const shopData = [
  {
    imageURI: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
    name: "Food Shops",
    content: "Various food items and essentials.",
    type: "food"
  },
  {
    imageURI: "https://images.unsplash.com/photo-1568871391149-449702439177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80",
    name: "Stationary Shops",
    content: "Your go-to place for all stationary items.",
    type: "stationary"
  },
  {
    imageURI: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80",
    name: "Other Shops",
    content: "Shop for a variety of miscellaneous items.",
    type: "other"
  }
];

const Cards = () => {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center">
        {shopData.map((shop, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} mt={4}>
            <CardShops
              imageURI={shop.imageURI}
              name={shop.name}
              content={shop.content}
              type={shop.type}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
