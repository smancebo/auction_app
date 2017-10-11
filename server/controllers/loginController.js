const controller = require('express').Router();
const db = require('../models/index');

controller.post('/', (req, res) => {
  const {username} = req.body;
  db.Player.findOrCreate({where: {username: username}, defaults: {coins: 1000} }).spread((user, created) => {
    res.json({user, created});
  });
});



module.exports = controller;
