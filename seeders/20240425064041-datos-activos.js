'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Activos', [
      {
        idActivo: "1111",
        numSerie: "12345",
        numInventario: "0",
        tipoActivo: "computadora",
        descripcionActivo: "Computadora de escritorio",
        ubicacion: "20",
        responsable: "1",
        imagenActivo: "computadora.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idActivo: "1112",
        numSerie: "678910",
        numInventario: "1",
        tipoActivo: "mobiliario",
        descripcionActivo: "Mesa",
        ubicacion: "20",
        responsable: "2",
        imagenActivo: "mesa.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idActivo: "1113",
        numSerie: "101112",
        numInventario: "3",
        tipoActivo: "equipo de electronica",
        descripcionActivo: "celular",
        ubicacion: "21",
        responsable: "3",
        imagenActivo: "celular.jpg",
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
