
import IndexHeader from '../Header/IndexHeader';

import Footer from '../Footer';
import DynamicNavbar from '../Navbar/DynamicNavbar';

const Dashboard = () => {
    return (
        <div>
            <DynamicNavbar userRole={'guest'}/>
            
            {/* <Carousel /> */}
            <IndexHeader />
            {/* <Shops /> */}

            <Footer />
        </div>
    );
}

export default Dashboard;