const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true},
  price: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema); 