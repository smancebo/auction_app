module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    amount: DataTypes.INTEGER,
  });
  Bid.associate = (models) => {

  }
  return Bid;
};
