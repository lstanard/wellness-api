require('dotenv').config();

/**
 * Express application
 */

const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');

const app           = express();

const PORT          = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('API running');
});

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});

export default app;
