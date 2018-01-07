/**
 * Express application
 */

export function app() {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('API Running');
    });

    app.listen(process.env.PORT, () => {
        console.log('App listening on port ' + process.env.PORT);
    });
}
