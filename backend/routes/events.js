const express = require('express');
const router = express.Router();
const {getEvents, addEvent, updateEvent, deleteEvent} = require('../controllers/eventController');

router.route('/').get(getEvents).post(addEvent)
router.route('/:id').put(updateEvent).delete(deleteEvent);

module.exports = router;