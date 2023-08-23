const { Number } = require('mongoose');
const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

module.exports = mongoose.model('Campus', campusSchema);
