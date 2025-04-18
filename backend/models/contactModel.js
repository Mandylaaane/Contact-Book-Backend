// MONGOOSE SCHEMA _________________________________________________

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false } // PREVENTS CREATION OF SEPARATE _id FOR SUBDOCUMENT
);

const contactSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: addressSchema, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
