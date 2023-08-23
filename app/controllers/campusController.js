const express = require('express');
const router = express.Router();
const campusService = require('../services/campusService');

exports.getCampusList = async (req, res) => {
  try {
    const campuses = await campusService.getCampusList();
    res.status(200).json(campuses); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCampus = async (req, res) => {
  try {
    const result = await campusService.addCampus(req.body);
    res.status(200).json({message:'INSERTED SUCCESSFULLY' ,result}); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editCampus = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await campusService.editCampus(id, req.body);
    if (!result._id) {
      return res.status(404).json({ message: 'Campus not found' });
    }
    res.status(200).json({message: 'UPDATED SUCCESSFULLY',result}); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCampus = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await campusService.deleteCampus(id);
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Campus not found' });
    }
    res.status(200).json({ message: 'DELETED SUCCESSFULLY', deletedMessage }); 
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

