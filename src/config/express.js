const express = require('express');
const {port} = require('../config/vars');
const app = express();
const v1Route = require('../api/routes/v1/index');

app.use(express.json());

// V1 routes
app.use('/api/v1', v1Route);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

module.exports = app;
