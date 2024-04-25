'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ubicaciones', [
      {
        idUbicacion: "20",
        descripcion: "Mexico",
        imagenUbicacion: "mexico.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUbicacion: "21",
        descripcion: "USA",
        imagenUbicacion: "usa.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idUbicacion: "22",
        descripcion: "Canada",
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
