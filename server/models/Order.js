const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    orderAmount: {
      type: Number,
      required: true,
    },
    deliveryAmount: {
        type: Number,
        required: true,
    },
    orderTotal: {
        type: Number,
        required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model("order", orderSchema);