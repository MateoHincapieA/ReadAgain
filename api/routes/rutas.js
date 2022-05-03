/*
Esta es la clase en la cual definimos las rutas a utilizar
*/

const express = require("express");
const router = express.Router();

const librosController = require("../controllers/libros.controller");

router
  .get("/api/v1/libros", librosController.getLibros)
  .post("/api/v1/libros", librosController.guardarUsuario)
  .put("/api/v1/libros/:id", librosController.actualizarUsuario)
  .delete("/api/v1/libros/:id", librosController.eliminarUsuario)
  
module.exports = router;