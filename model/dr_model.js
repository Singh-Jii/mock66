const my_mongoose = require('mongoose');

const dr_schema = new my_mongoose.Schema({

  name: {

    type: String,

    req: true,

  },

  image: {

    type: String,

    req: true,

  },

  specialization: {

    type: String,

    enum: ['Cardiologist', 'Dermatologist', 'Pediatrician','Psychiatrist'],

    req: true,

  },

  experience: {

    type: Number,

    req: true,

  },

  location: {

    type: String,

    req: true,

  },

  date: {

    type: Date,

    req: true,

  },

  slots: {

    type: Number,

    req: true,

  },

  amount: {

    type: Number,

    req: true,

  },

});

const dr_model = my_mongoose.model('Doctor', dr_schema);

module.exports = {dr_model};