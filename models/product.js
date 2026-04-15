const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', //this is to map which objectid exactly to use as userId so here use USer model 
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
//this model connects schema with a name 
