// import Footer from './Footer';
// import IndexNavbar from '../Navbar/IndexNavbar';
import UserNavbar from '../../Navbar/UserNavbar';
// import IndexHeader from '../Header/IndexHeader';
// import Carousel from '../Carousel/Carousel'
import Cards from '../../Card/index';
import Typography from '@mui/material/Typography';



const Shops = () => {

    return (
        <div className= 'background' style = {{height:'1200px', backgroundColor: '#a1ffce',background: 'linear-gradient(to right, #a1ffce, #faffd1)'}}>
            {/* <IndexNavbar /> */}
            <UserNavbar />
            <Typography variant="h4" component="h4" sx ={{ pt: 10, pl:10, fontFamily: 'Roboto'}}>
              Types of Shops
            </Typography>
                
            <Cards />
            {/* <Footer /> */}
        </div>
    );
}

export default Shops;