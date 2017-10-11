const Sequelize = require('sequelize');

module.exports = new Sequelize('auction.app.db', null, null, {
  storage: './auction.app.db3',
  dialect: 'sqlite'
});
