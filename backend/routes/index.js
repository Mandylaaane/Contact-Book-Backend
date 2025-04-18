// API ENDPOINTS _____________________________________________________
const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

// TEST
router.get("/", (req, res) => {
  res.send("Welcome to Contact Book!");
});

// GET: ALL CONTACTS
router.get("/contacts", async (req, res) => {
  try {
    const contactsAll = await Contact.find();
    res.json(contactsAll);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
});

// GET: CONTACT BY FIRST NAME
router.get("/firstname/:firstName", async (req, res) => {
  try {
    const contactByFirstName = await Contact.findOne({
      first_name: req.params.firstName,
    });
    if (!contactByFirstName)
      return res.status(404).json({ message: "Contact not found" }); // 404: NOT FOUND
    res.json(contactByFirstName);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
});

// POST: CREATE NEW CONTACT
router.post("/contacts/createnew", async (req, res) => {
  const newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  });
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact); // 201: CREATED
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
});

// PUT: UPDATE CONTACT
router.put("/contact/update/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContact)
      return res.status(404).json({ message: "Contact not found" });
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400: BAD REQUEST
  }
});

// DELETE: DELETE CONTACT
router.delete("/contact/delete/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
      return res.status(404).json({ message: "Contact not found" }); //404: NOT FOUND
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
});

module.exports = router;
