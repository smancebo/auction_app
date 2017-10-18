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
      this.started = false;
    } else {
      Object.assign(this, auction);
    }
  }
  start() {
    debugger
    if(this.status !== '') {
      this.emit('started');
      this.started = true;
      this._interval = setInterval(() => {
        if (this.timeLeft === 0) {
          this.end();
          return;
        }
        this.timeLeft -= 1
        this.emit('tick', this.timeLeft);
      }, 1000);
    }
  }
  stop() {
    clearInterval(this._interval);
    this.started = false;
    this.status = AuctionStatus.ended;
    this.emit('stopped');
  }
  async end() {
    clearInterval(this._interval);
    this.started = false;
    this.status = AuctionStatus.ended;
    await db.Auction.update(this, {where: {id: this.id}, fields: ['status'] });
    this.emit('ended');
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

  static getAuctions() {
    return db.Auction.findAll({ where: {status :{ [Op.ne]: 'ended' } }, include: [{ model: db.Player}, {model: db.Item}] }).catch((err) => {console.log(err)})
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
