'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: "abc",
      firstName: 'John',
      lastName: 'Doe',
      address: "abc",
      gender: 1,
      typeRole: "R1",
      keyRole: "abc",

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
