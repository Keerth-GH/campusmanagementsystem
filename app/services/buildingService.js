const buildingRepository = require('../repository/buildingRepository');

exports.getBuildingList = async () => {
  return await buildingRepository.getBuildingList();
};

exports.addBuilding = async (buildingData) => {
  return await buildingRepository.createBuilding(buildingData);
};

exports.editBuilding = async (id, updateData) => {
  return await buildingRepository.updateBuilding(id, updateData);
};

exports.deleteBuilding = async (id) => {
  return await buildingRepository.deleteBuilding(id);
};
