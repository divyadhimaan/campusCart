import { React } from "react";
// import { Link } from 'react-router-dom';
import "./IndexNavbar.css";


import { Navbar, Container, Button } from 'react-bootstrap'


const IndexNavbar = () => {
    // const [type, setType] = useState('customer');

    return (
      <>
      <Navbar bg="light" >
        <Container>
          <Navbar.Brand href="/"  style={{ fontWeight: "Bold"}}>
          Flash
          </Navbar.Brand>
          <div >
          
            <Button 
              variant="outline-secondary" 
              href='/user' 
              style={{marginRight: "20px"}} 

            >
              Sign Up As?
            </Button>
            {/* <Button 
              variant="outline-secondary" 
              href='/signup' 
              style={{marginRight: "20px"}} 
            >
              Shopkeeper
            </Button> */}

          </div>
         
        </Container>
      </Navbar>
</>
    );
};

export default IndexNavbar;