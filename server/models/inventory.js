module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    quantity: DataTypes.INTEGER,
  });
  // Inventory.associate = (models) => {
  //   Inventory.hasOne(models.Player, { as: 'username' });
  //   Inventory.hasOne(models.Item, { as: 'item' });
  // };
  return Inventory;
};
