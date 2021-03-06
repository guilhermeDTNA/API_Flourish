'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dreams', [
      {
        description_dream: 'Viajar',
        realization_at: new Date(),
        limit_value: 230.00,
        status_dream_id: 1
      },
      {
        description_dream: 'Contruir',
        realization_at: new Date(),
        limit_value: 830.00,
        status_dream_id: 2
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dreams', null, {})
  }
}
