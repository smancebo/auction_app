const eventEmitter = require('events');
const Auction = require('./Auction');
const db = require('../models/index');

class AuctionStack extends eventEmitter {
  constructor() {
    super();
    this._auctions = [];
    this.current;
  }

  async push(auction) {
    let auct = new Auction(auction);
    let result = await auct.save().catch((err) => {
      this.emit('pushStackError', err);
      return;
    });
    this.emit('pushed', result);
  }
  remove(id) {

  }
  _start() {
    debugger
    this.current.start();
    this.current.on('tick', (tick) => {
      this.emit('tick', tick);
    })
    this.current.on('ended', () => {
      this.emit('ended');
    })
    this.emit('started');
  }
  async next() {
    let n = await db.Auction.findOne({where: {'status': 'queue'}, include: [{ model: db.Player}, {model: db.Item}], order: [ ['createdAt', 'ASC'] ]});
    n.status = 'active';
    await n.save();
    this.current = new Auction(n.dataValues);
    this._start();
  }
  async __fill() {

    let promise = new Promise(async(resolve, reject) => {
        this._auctions = await Auction.getAuctions().catch((err) => {console.log(err)});
        this.emit('filled', this._auctions);
        let current = this._auctions.filter((a) => {
          return a.status === 'active';
        })[0];
        debugger
        if(current) {
          this.current = new Auction(current.dataValues);
          this._start();
        }else {
          await this.next();
        }

        resolve(this._auctions);
    });

    return promise;

  }
  static async build() {
    let stack = new AuctionStack();
    await stack.__fill();
    return stack;
  }
}

module.exports = new AuctionStack();
