'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Responsables', [
      {
        idResponsable: "00001",
        numEmpleado: "1",
        nombre: "Juan",
        imagenResponsable: "juan.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idResponsable: "00002",
        numEmpleado: "2",
        nombre: "Luis",
        imagenResponsable: "luis.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idResponsable: "00003",
        numEmpleado: "3",
        nombre: "Oscar",
        imagenResponsable: "oscar.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
