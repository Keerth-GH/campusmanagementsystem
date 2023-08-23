const campusRepository = require('../repository/campusRepository');

exports.getCampusList = async () => {
  const campuses = await campusRepository.getCampusList()
  return campuses;
};

exports.addCampus = async (campusData) => {
  const campus = await campusRepository.createCampus(campusData);
  return campus;
};

exports.editCampus = async (id, updateData) => {
  const updatedCampus = await campusRepository.updateCampus(id, updateData);
  return updatedCampus;
};

exports.deleteCampus = async (id) => {
  const deletedCampus = await campusRepository.deleteCampus(id);

  if (!deletedCampus) {
    return null;
  }

  return "Deleted successfully";
};
