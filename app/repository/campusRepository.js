const Campus = require('../models/campus');
const Building = require('../models/building');

exports.getCampusList = async () => {
  return await Campus.find();
};

exports.deleteCampus = async (id) => {
  const campus = await Campus.findByIdAndDelete(id);
  if (!campus) {
    return null;
  }
  await Building.deleteMany({ campusId: id });
  return campus;
};

exports.getCampusById = async (id) => {
  return await Campus.findById(id);
};

exports.createCampus = async (campusData) => {
  const campus = new Campus(campusData);
  return await campus.save();
};

exports.updateCampus = async (id, updateData) => {
  return await Campus.findByIdAndUpdate(id, updateData, { new: true });
};

