// HTTP REQUESTS & RESPONSES CONTROLLER_____________________________

const Contact = require("../models/contactModel");

// GET: ALL CONTACTS INFO
const getContactsAll = async (req, res) => {
  try {
    const contactsAll = await Contact.find();
    res.status(200).json(contactsAll); // 200: OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
};

// GET: CONTACT BY FIRST NAME
const getContactByFirstName = async (req, res) => {
  try {
    const contactByFirstName = await Contact.findOne({
      first_name: req.params.firstName,
    });
    if (!contactByFirstName) {
      return res.status(404).json({ message: "Contact not found" }); // 404: NOT FOUND
    }
    res.status(200).json(contactByFirstName); // 200: OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
};

// POST: CREATE NEW CONTACT
const createNewContact = async (req, res) => {
  const { first_name, last_name, phone, email, address } = req.body;
  const newContact = new Contact({
    first_name,
    last_name,
    phone,
    email,
    address,
  });
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact); // 201: CREATED
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400: BAD REQUEST
  }
};

// PUT: UPDATE CONTACT
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContact)
      return res.status(404).json({ message: "Contact not found" }); // 404: NOT FOUND
    res.status(200).json(updatedContact); // 200: OK
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400: BAD REQUEST
  }
};

// DELETE CONTACT
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact)
      return res.status(404).json({ message: "Contact not found" }); // 404: NOT FOUND
    res.status(204).send(); // 204: NO CONTENT
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500: INTERNAL SERVER ERROR
  }
};

module.exports = {
  getContactsAll,
  getContactByFirstName,
  createNewContact,
  updateContact,
  deleteContact,
};
