const eventEmitter = require('events');
const db = require('../models/index');
const Op = db.Sequelize.Op;

const AuctionStatus = {
  ended: 'ended',
  queue: 'queue',
  active: 'active'
};

module.exports = class Auction extends eventEmitter {

  constructor(auction) {
    super();
    if (!auction) {
      this.id = 0;
      this.price = 0;
      this.status = '';
      this.quantity = 0;
      this.timeLeft = 10;
      this.Player = {};
      this.Item = {};
      this._interval = 0;
    } else {
      Object.assign(this, auction);
    }
  }
  start() {
    this.emit('started');
    this._interval = setInterval(() => {
      if (this.timeLeft === 0) {
        this.stop();
        return;
      }
      this.timeLeft -= 1
      this.emit('tick', this.timeLeft);
    }, 1000);
  }
  stop() {
    clearInterval(this._interval);
    this.status = AuctionStatus.ended;
    this.emit('stopped');
  }

  async save() {
    let model = db.Auction.build(this);
    model.PlayerId = this.Player.id;
    model.ItemId = this.Item.id;
    model.timeLeft = 90;
    let activeAuction = await db.Auction.findOne({where: {status: 'active'}})
    if(activeAuction === null) { //no active Auction
      model.status = AuctionStatus.active;
    } else {
      model.status = AuctionStatus.queue;
    }
    console.log('saved');
    return await model.save();
  }

  static async getAuctions() {
    return await db.Auction.findAll({ where: {status :{ [Op.ne]: 'ended' } } })
  }
  static async getAuction(id) {
    let auction = await db.Auction.findOne({
      where: {
        id
      }
    });
    return auction;
  }

}
