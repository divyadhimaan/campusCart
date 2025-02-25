import Grid from '@mui/material/Grid';
import ShopSpecificCard from './ShopSpecificCard';
import UserNavbar from '../Navbar/UserNavbar';
import Typography from '@mui/material/Typography';

const ShopCategories = [
  {
    category: "Food",
    shops: [
      {
        imageURI: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
        name: "Shop1",
        ratings: "5.0",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80",
        name: "Shop2",
        ratings: "4.2",
        status: "Closed"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1456511280309-a5312dce4f38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        name: "Shop3",
        ratings: "3.6",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Shop4",
        ratings: "4.2",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
        name: "Shop5",
        ratings: "2.2",
        status: "Closed"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        name: "Shop6",
        ratings: "4.6",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
        name: "Shop7",
        ratings: "3.8",
        status: "Closed"
      }
    ]
  },
  {
    category: "Other",
    shops: [
      {
        imageURI: "https://images.unsplash.com/photo-1531496020551-4246929e5a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80",
        name: "Shop1",
        ratings: "5.0",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1612190656723-c409e75ea4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        name: "Shop2",
        ratings: "4.2",
        status: "Closed"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        name: "Shop3",
        ratings: "3.6",
        status: "Closed"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
        name: "Shop4",
        ratings: "4.2",
        status: "Closed"
      }
    ]
  },
  {
    category: "Stationary",
    shops: [
      {
        imageURI: "https://images.unsplash.com/photo-1531496020551-4246929e5a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80",
        name: "Shop1",
        ratings: "5.0",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1612190656723-c409e75ea4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        name: "Shop2",
        ratings: "4.2",
        status: "Closed"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        name: "Shop3",
        ratings: "3.6",
        status: "Open"
      },
      {
        imageURI: "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
        name: "Shop4",
        ratings: "4.2",
        status: "Open"
      }
    ]
  }
];

const ShopList = ({ category, shops }) => (
  <div style={{ height: '800px', backgroundColor: '#a1ffce', background: 'linear-gradient(to right, #a1ffce, #faffd1)' }}>
    <UserNavbar />
    <Typography variant="h4" component="h4" sx={{ pt: 5, pl: 6, fontFamily: 'Roboto' }}>
      All the available {category} Shops:
    </Typography>
    <Grid container spacing={0}>
      {shops.map((shop, index) => (
        <Grid item xs={6} md={3} key={index}>
          <ShopSpecificCard
            imageURI={shop.imageURI}
            alt=""
            name={shop.name}
            ratings={shop.ratings}
            to="shop-page"
            status={shop.status}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

const SpecificShops = () => {
  return (
    <>
      {ShopCategories.map((categoryData, index) => (
        <ShopList key={index} category={categoryData.category} shops={categoryData.shops} />
      ))}
    </>
  );
};

export default SpecificShops;
