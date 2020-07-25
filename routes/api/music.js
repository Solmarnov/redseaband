const router = require('express').Router();
const musicController = require('../../controllers/musicController');

// Matches with '/api/music'
router.route('/')
.get(musicController.findAll)
.post(musicController.create);

// Matches with '/api/music/:id'
router.route('/:id')
.put(musicController.update);

module.exports = router;