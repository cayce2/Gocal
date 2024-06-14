const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Form = require('../models/Form');

// Define the validation schema using Joi
const formSchema = Joi.object({
  fullName: Joi.string().required(),
  employeeNo: Joi.string().required(),
  date: Joi.date().required(),
  shift: Joi.string().required(),
  route: Joi.string().required(),
  destination: Joi.string().required(),
  estate: Joi.string().required(),
  phoneNo: Joi.string().required()
});

// Middleware for validating form submission data
const validateForm = (req, res, next) => {
  const { error } = formSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Handle form submission
router.post('/', validateForm, async (req, res) => {
  const { fullName, employeeNo, date, shift, route, destination, estate, phoneNo } = req.body;
  
  const newForm = new Form({
    fullName,
    employeeNo,
    date,
    shift,
    route,
    destination,
    estate,
    phoneNo
  });

  try {
    await newForm.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

// Fetch all form submissions
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch form data' });
  }
});

module.exports = router;
