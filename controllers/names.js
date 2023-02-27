const Names = require('../models/names');

exports.printValues = (req, res, next) => {
Names.findAll().then(names => {
    console.log(names);
    res.json(names);
})
}



exports.storeValues = (req, res, next) => {
const name = req.body.name;
console.log(name);
Names.create({
    name
}).then(result => {
    console.log(result);
    //res.redirect('/')
})
}