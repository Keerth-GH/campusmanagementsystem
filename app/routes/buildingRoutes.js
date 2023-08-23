const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/buildingController');

router.get('/buildings', buildingController.getBuildingList);
router.post('/buildings', buildingController.addBuilding);
router.put('/buildings/:id', buildingController.editBuilding);
router.delete('/buildings/:id', buildingController.deleteBuilding);

module.exports = router;
