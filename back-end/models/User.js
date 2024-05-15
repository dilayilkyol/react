const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/orderingsystem');
 var db = mongoose.connection;

 db.on('error', ()=>console.log('Database connection error.'));
 db.once('open', ()=>console.log('Database connection successful.'));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema); 