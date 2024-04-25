'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ubicacions', [
      {
        idUbicacion: "20",
        descripcionUbicacion: "Mexico",
        imagenUbicacion: "mexico.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUbicacion: "21",
        descripcionUbicacion: "USA",
        imagenUbicacion: "usa.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUbicacion: "22",
        descripcionUbicacion: "Canada",
        imagenUbicacion: "canada.jpg",
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
