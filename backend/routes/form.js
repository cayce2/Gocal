const express = require('express');
   const router = express.Router();
   const Form = require('../models/Form');

   // @route   POST api/forms
   // @desc    Submit a form
   // @access  Public
   router.post('/', async (req, res) => {
     const { name, email, message } = req.body;

     try {
       const newForm = new Form({
         name,
         email,
         message
       });

       const form = await newForm.save();
       res.json(form);
     } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
     }
   });

   module.exports = router;
