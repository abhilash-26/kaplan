const express = require('express');
const router = express.Router();
const userRoute = require('./population.route');

router.get('/status', (req, res) => {
	res.send('Ok!');
});

router.use('/population', userRoute);

module.exports = router;
