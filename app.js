const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorController.get404);

//app.get('/',fn)
//app.post('/',fn)

sequelize.sync().then(result => {
    console.log(result);
})
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));

