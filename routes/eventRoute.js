const express = require('express');

const controller = require('../controllers/eventController');

const router = express.Router();

//GET /event: send all event to the user
router.get('/', controller.index);

//GET /event/new: Send html form for creating a new story
router.get('/new', controller.new);

//POST /event: create a new story
router.post('/', controller.create);

// GET event/:id send details of story identified by id
router.get('/:id', controller.show);

//GET /event /:id/edit: send html form for editing an existing form
router.get('/:id/edit', controller.edit);

//PUT /event/:id: update the story identified by id
router.put('/:id',controller.update);

//DELETE /event/:id: delete the story identified by id
router.delete('/:id', controller.delete);

module.exports = router;