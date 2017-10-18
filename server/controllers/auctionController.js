const controller = require('express').Router();
const Auction = require('../bussiness/Auction');
const AuctionStack = require('../bussiness/AuctionStack');


controller.post('/', async (req, res) => {
  let auction = new Auction(req.body);
  let auctionStack  = AuctionStack;
  let response = await auctionStack.push(auction);
  res.json(response);
})

module.exports = controller;
