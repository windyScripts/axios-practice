const path = require('path');
const Names = require('./models/names')

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const namesController = require('./controllers/names')

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(errorController.get404);

app.get('/',namesController.printValues)
app.post('/',namesController.storeValues)


sequelize.sync().then(result => {
    console.log("Connected to DB");
})
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));

