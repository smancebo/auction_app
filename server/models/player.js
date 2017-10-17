
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    username: DataTypes.STRING,
    coins: DataTypes.DECIMAL,
  });
  Player.associate = (models) => {
    Player.hasMany(models.Inventory);
    Player.hasMany(models.Bid);
    Player.hasMany(models.Auction);
  };
  return Player;
};
