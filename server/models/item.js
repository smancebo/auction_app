
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  Item.associate = (models) => {
    Item.hasMany(models.Inventory);
  };
  return Item;
};
