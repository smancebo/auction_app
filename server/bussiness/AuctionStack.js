const eventEmitter = require('events');
const Auction = require('./Auction');

class AuctionStack() extends eventEmitter {
  constructor() {
    super();
  }
  this._auctions = [];
  push(auction) {
    let auct = new Auction(auction);
    let result = await auct.save().catch((err) => {
      this.emit('pushStackError', err);
      return;
    });
    this.emit('pushed', result);
  }
  remove(id) {

  }
  async __fill() {
    this._auctions = await Auction.getAuctions();
    this.emit('pushed', result);
  }
}
