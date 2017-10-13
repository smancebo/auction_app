'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Carrot',
      image: 'img-carrot',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bread',
      image: 'img-bread',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Diamond',
      image: 'img-diamond',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
