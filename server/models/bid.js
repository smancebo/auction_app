module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    amount: DataTypes.INTEGER,
  });
  Bid.associate = (models) => {
    Bid.belongsTo(models.Auction);
    Bid.belongsTo(models.Player);
  };
  return Bid;
};
