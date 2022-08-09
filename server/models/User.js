const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
    lastName: {
        type: String,
        required: true,
      },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    phoneNumber: {
        type: String,
        required: true,
      },
    address: {
        type: String,
        // required: true,
      },
    password: {
        type: String,
        required: true,
      },
    pincode: {
        type:Number,
        // required: true
        },
    // date: {
    //     type: Date,
    //     default: Date.now,
    //   },
});

module.exports = mongoose.model("User", userSchema);

