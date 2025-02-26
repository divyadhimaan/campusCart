import Grid from "@mui/material/Grid";
import ShopSpecificCard from "./ShopSpecificCard";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import DynamicNavbar from "../Navbar/DynamicNavbar";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const ShopCategories = {
  food: [
    {
      imageURI:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      name: "The Gourmet Hub",
      ratings: "5.0",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1119&q=80",
      name: "Taste Haven",
      ratings: "4.2",
      status: "Closed",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1456511280309-a5312dce4f38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Flavor Junction",
      ratings: "3.6",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Epicurean Delights",
      ratings: "4.2",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      name: "Savory Street",
      ratings: "2.2",
      status: "Closed",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      name: "Culinary Corner",
      ratings: "4.6",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
      name: "Bite Bliss",
      ratings: "3.8",
      status: "Closed",
    },
  ],
  other: [
    {
      imageURI:
        "https://images.unsplash.com/photo-1531496020551-4246929e5a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80",
      name: "The Curiosity Shop",
      ratings: "5.0",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1612190656723-c409e75ea4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "Treasure Trove",
      ratings: "4.2",
      status: "Closed",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      name: "Eclectic Emporium",
      ratings: "3.6",
      status: "Closed",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
      name: "Miscellaneous Market",
      ratings: "4.2",
      status: "Closed",
    },
  ],
  stationary: [
    {
      imageURI:
        "https://images.unsplash.com/photo-1531496020551-4246929e5a6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80",
      name: "Paper & Ink",
      ratings: "5.0",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1612190656723-c409e75ea4bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      name: "The Writing Nook",
      ratings: "4.2",
      status: "Closed",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      name: "Stationery Station",
      ratings: "3.6",
      status: "Open",
    },
    {
      imageURI:
        "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
      name: "The Pen & Paper Co.",
      ratings: "4.2",
      status: "Open",
    },
  ],
};
const SpecificShops = () => {
  const { category } = useParams();
  const shops = ShopCategories[category] || [];

  return (
    <div>
      <DynamicNavbar userRole={'user'} />
      <Typography
        variant="h4"
        component="h4"
        sx={{ pt: 5, pl: 6, fontFamily: "Roboto" }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
        Shops:
      </Typography>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {shops.map((shop, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ShopSpecificCard
              imageURI={shop.imageURI}
              alt={shop.name}
              name={shop.name}
              ratings={shop.ratings}
              to="shop-page"
              status={shop.status}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default SpecificShops;