// const { Number } = require('mongoose');
// const mongoose = require('mongoose');


// const buildingSchema = new mongoose.Schema({
//   id: {type: Number,required : true},
//   campusId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campus', required: true },
//   name: { type: String, required: true },
//   status: { type: String, enum: ['active', 'inactive'], default: 'active' }
// });

// module.exports = mongoose.model('Building', buildingSchema);


const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  campusId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campus', required: true },
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

module.exports = mongoose.model('Building', buildingSchema);
