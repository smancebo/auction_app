module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    quantity: DataTypes.INTEGER,
  });
  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Player);
    Inventory.belongsTo(models.Item);
  };
  return Inventory;
};
