const express = require('express');
const router = express.Router();
const campusController = require('../controllers/campusController');

router.get('/campuses', campusController.getCampusList);
router.post('/campuses', campusController.addCampus);
router.put('/campuses/:id', campusController.editCampus);
router.delete('/campuses/:id', campusController.deleteCampus);

module.exports = router;
