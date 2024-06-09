const express = require('express');
   const mongoose = require('mongoose');
   const bodyParser = require('body-parser');

   const app = express();
   const port = process.env.PORT || 3000;

   const formRoutes = require('./routes/form');
   app.use('/api/forms', formRoutes);

   // Middleware
   app.use(bodyParser.json());

   // MongoDB Connection
   mongoose.connect('mongodb://localhost:27017/formDB', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected...'))
     .catch(err => console.log(err));

   // Define a simple route
   app.get('/', (req, res) => {
     res.send('Hello World');
   });

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
