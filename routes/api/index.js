const router = require('express').Router();
const thoughtRoutes = require('./thoughRoutes');

router.use('/thoughts', thoughtRoutes);

module.exports = router;