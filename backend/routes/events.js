const express = require('express');
const router = express.Router();
const {getEvent,joinEvent, addEvent, updateEvent, deleteEvent} = require('../controllers/eventController');
const {protect} = require("../middleware/authMiddleware")

router.route('/').post(addEvent)
router.route('/:id').get(protect,getEvent).put(protect, updateEvent).delete(protect,deleteEvent);
router.route('/login').post(joinEvent)
module.exports = router;