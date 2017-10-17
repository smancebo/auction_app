
module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER, 
    timeLeft: DataTypes.INTEGER,
  });

  Auction.associate = (models) => {
    Auction.belongsTo(models.Player);
    Auction.belongsTo(models.Item);
    Auction.hasMany(models.Bid);
  };
  return Auction;
};
