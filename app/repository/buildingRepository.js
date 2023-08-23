const Building = require('../models/building');

exports.getBuildingList = async () => {
  return await Building.find();
};

exports.createBuilding = async (buildingData) => {
  const building = new Building(buildingData);
  return await building.save();
};

exports.updateBuilding = async (id, updateData) => {
  return await Building.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteBuilding = async (id) => {
  return await Building.findByIdAndDelete(id);
};
