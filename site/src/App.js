import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';

import User from './Components/User';
import Profile from './Components/User/Profile';

import Shops from './Components/Shop/Shops'; 
import ShopPage from './Components/Shop/ShopPage'; 
import ShopDashboard from './Components/Shop/ShopDashboard';

import Signup from './Components/Signup';
import Login from './Components/Login';

// import Food from './Components/Card/Food';
// import Stationary from './Components/Card/Stationary';
// import Other from './Components/Card/Other';
import SpecificShops from './Components/Card/SpecificShops';


// import AddShop from './Components/AddShop';
import AddingShop from './Components/AddShop/AddingShop';
import EditingShop from './Components/AddShop/EditingShop';



function App() {
 return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />

          <Route path='/shops' element={<Shops />} />
          <Route path='/shop-page' element={<ShopPage />} />

{/* 
          <Route path='/food-shops' element={<Food />} />
          <Route path='/stationary-shops' element={<Stationary />} />
          <Route path='/other-shops' element={<Other />} /> */}
          <Route path='/specific-shops' element={<SpecificShops />} />

          {/* <Route path='/select-location' element={<SignupPage />} />   */}
          {/* <Route path='/admin-login' exact component={AdminLogin} /> */}

          <Route path='/login-user' element={<Login type="user"/>} />
          <Route path='/signup-user' element={<Signup type="user"/>} />
          <Route path='/login-shop' element={<Login type="shop"/>} />
          <Route path='/signup-shop' element={<Signup type="shop"/>} />
          <Route path='/user' element={<User />} />

          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/add-shop' element={<AddShop />} /> */}
          <Route path='/adding-shop' element={<AddingShop />} />
          <Route path='/editing-shop' element={<EditingShop />} />

          <Route path='/dashboard-shop' element={<ShopDashboard />} />


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;