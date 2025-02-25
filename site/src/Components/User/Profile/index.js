import "./index.css";
// import Chart from "./Charts.js"
// import PersonIcon from "@mui/icons-material/Person";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import DateRangeIcon from '@mui/icons-material/DateRange';
import UserNavbar from "../../Navbar/UserNavbar";
import { Container, Card, Button } from "react-bootstrap";
import profileCover from "./../../../assets/img/profile-cover.jpg";
import profilePic from "./../../../assets/img/profile-pic.jpg";

import Footer from '../../Footer';


const Main = () => {
  return (
    <div
      style={{
        backgroundColor: "#a1ffce",
        background: "linear-gradient(to right, #a1ffce, #faffd1)",
      }}
    >
      <UserNavbar />

      <Container>
        <div className="main__container" >
          <div className="main_title">
            {/* <img src="assets/hello.png" alt="Hello"/> */}
            <div className="main__greeting">
              <h1>Hello!</h1>
              <p>Welcome to your profile</p>
            </div>
          </div>

          {/* USER CARD */}
          <Card
            style={{
              marginTop: "30px",
              height: "300px",
              background: { profileCover },
            }}
          >
            <Card.Img
              variant="top"
              src={profilePic}
              style={{
                height: "120px",
                width: "120px",
                marginTop: "30px",
                borderRadius: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>*Username*</Card.Title>
              {/* <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Button
              variant="outline-secondary"
              href="/login-user"
              style={{ marginRight: "20px", float: "right" }}
            >
              Edit Profile
            </Button>
          </Card>

          {/*  DETAIL INFO */}
          <div className="main__cards">
            <div className="card">
              {/* <DateRangeIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p">Today's orders</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>
            <div className="card">
              {/* <CalendarTodayIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p">Weekly Orders</p>
                <span className="font-bold text-title">1</span>
              </div>
            </div>

            <div className="card">
              {/* <CalendarTodayIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p">Monthly Orders</p>
                <span className="font-bold text-title">12</span>
              </div>
            </div>

            <div className="card">
              {/* <PersonIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p">Total Orders</p>
                <span className="font-bold text-title">300</span>
              </div>
            </div>

          </div>
        
        {/* PREVIOUS ORDER DETAILS */}

        {/* <Card
            style={{
              marginTop: "30px",
              height: "60px",
              background: { profileCover },
            }}
          >
            <Card.Body>
              <Card.Title className="text-primary-p">Last Order Details</Card.Title>
              
            </Card.Body>
          </Card> */}
        <div className="detail__cards">
            <div className="d_card">
              {/* <DateRangeIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p-d">Last Order</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>
            <div className="d_card">
              {/* <CalendarTodayIcon /> */}
              <div className="card_inner">
                <p className="text-primary-p-d">Last to Last Order</p>
                <span className="font-bold text-title">1</span>
              </div>
            </div>

          </div>

          
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
