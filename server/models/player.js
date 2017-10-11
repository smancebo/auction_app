'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    username: DataTypes.STRING,
    coins: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Player;
};
