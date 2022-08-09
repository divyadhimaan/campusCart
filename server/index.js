const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
// const passportLocalMongoose = require('passport-local-mongoose');

const User = require("./models/User.js");
const Shop = require("./models/Shop.js");
const Order = require("./models/Order.js");

// const authRoutes = require("./routes/auth.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_ADMIN}:${process.env.MONGODB_PASSWORD}@cluster0.7myea.mongodb.net/tietDB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected");
  }
);

//------------------Middleware---------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(
  cors({
    'origin': "http://localhost:3000", // <-- location of the react app were connecting to
    'credentials': true,
  })
);


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//-------------------END OF MIDDLEWARE----------------------//

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shops", (req, res) => {
  // res.status(200).json({
  //   msg: 'this is home'
  // })

  // if (req.isAuthenticated()) {
  //   res.render("shops");
  // } else {
  //   res.redirect("/login");
  // }
});

//user authentication
app.post("/signup-user", (req, res) => {
  console.log("in signup user");
  const {
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    password,
    address,
    pincode,
    // date,
  } = req.body;

  User.findOne({ username: username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: hashedPassword,
        address: address,
        pincode: pincode,
        // date: date,
      });
      await newUser.save()
        .then((user) => {
          console.log(user);
        });
        res.redirect('/login-user');
      // res.send("User Created");
      // res.render("shops");
    }
  });
});

app.post("/login-user", (req, res, next) => {
  console.log("in login user");

  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user){
      res.send("No User Exists");
    } 
    else {
      req.logIn(user, err => {
        if (err) throw err;
        else {
          console.log("Successfully Authenticated");
          // res.send("Successfully Authenticated");
          // return res.redirect("/shops");
        }
        console.log(req.user);
      });
      
    }
  })(req, res, next);
});

//shop authentication
app.post("/signup-shop", (req, res) => {
  console.log("in signup shop");
  const {
    name,
    username,
    email,
    phoneNumber,
    password,
    address,
    pincode,
    // date,
  } = req.body;

  Shop.findOne({ username: username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Shop Already exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newShop = new Shop({
        name: name,
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: hashedPassword,
        address: address,
        pincode: pincode,
        // date: date,
      });
      await newShop.save();
      res.send("Shop Created");
      // res.render("shops");
    }
  });
});

app.post("/login-shop", (req, res, next) => {
  console.log("in login shop");

  passport.authenticate("local", (err, shop, info) => {
    if (err) throw err;
    if (!shop) res.send("No such Shop Exists");
    else {
      req.logIn(shop, err => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        // res.render("shops");
        console.log(req.shop);
      });
    }
  })(req, res, next);
});
//-------------------END OF ROUTES---------//

//start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
