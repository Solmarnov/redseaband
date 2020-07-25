const router = require('express').Router();
const musicRoutes = require('./music');

// Music routes
router.use('/music', musicRoutes);

module.exports = router;