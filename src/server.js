const express = require('express');
const routes = require('./routes');

(async () => {
    const database = require('../db');

    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3333);