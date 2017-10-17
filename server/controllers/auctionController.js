const controller = require('express').Router();
const Auction = require('../bussiness/Auction');


controller.post('/', async (req, res) => {
  let auction = new Auction(req.body);
  let response = await auction.save();
  res.json(response);
})

module.exports = controller;
