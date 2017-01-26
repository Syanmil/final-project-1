'use strict';
const faker = require('faker')
function random() {
  return (Math.floor(Math.random()*(9999999999-1111111111)+1111111111))
}

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {name: faker.name.firstName(), password: false, birthdate: faker.date.between('1980-01-01', '2000-12-30'), ocean: random(), createdAt: new Date(), updatedAt: new Date(), role: 'free'},
      {name: faker.name.firstName(), password: false, birthdate: faker.date.between('1980-01-01', '2000-12-30'), ocean: random(), createdAt: new Date(), updatedAt: new Date(), role: 'free'},
      {name: faker.name.firstName(), password: false, birthdate: faker.date.between('1980-01-01', '2000-12-30'), ocean: random(), createdAt: new Date(), updatedAt: new Date(), role: 'free'},
      {name: faker.name.firstName(), password: false, birthdate: faker.date.between('1980-01-01', '2000-12-30'), ocean: random(), createdAt: new Date(), updatedAt: new Date(), role: 'free'},
      {name: faker.name.firstName(), password: false, birthdate: faker.date.between('1980-01-01', '2000-12-30'), ocean: random(), createdAt: new Date(), updatedAt: new Date(), role: 'free'},
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
