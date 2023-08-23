const buildingService = require('../services/buildingService');

exports.getBuildingList = async (req, res) => {
  try {
    const buildings = await buildingService.getBuildingList();
    res.status(200).json(buildings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addBuilding = async (req, res) => {
  try {
    const building = await buildingService.addBuilding(req.body);
    res.status(201).json({message:'INSERTED SUCCESSFULLY', building});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBuilding = await buildingService.editBuilding(id, req.body);
    if (!updatedBuilding) {
      return res.status(404).json({ message: 'Building not found' });
    }
    res.status(200).json({message:'UPDATED SUCCESSFULLY', updatedBuilding});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBuilding = await buildingService.deleteBuilding(id);
    if (!deletedBuilding) {
      return res.status(404).json({ message: 'Building not found' });
    }
    res.status(200).json({message:'DELETED SUCCESSFULLY', deletedBuilding});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

