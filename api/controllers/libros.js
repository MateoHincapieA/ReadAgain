/*
Esta clase indicar que se gestionaran las peticiones del usuario por get, post, put, o delete.
*/

const ServicePostgres = require("../services/postgres");
const _servicePg = new ServicePostgres();

const methods = {
  async getLibros(request, response) {
    try {
      const sql = "SELECT * FROM libros";
      let responseDB = await _servicePg.execute(sql);
      let rowCount = responseDB.rowCount;
      let rows = responseDB.rows;
      let responseJSON = {};
      responseJSON.ok = true;
      responseJSON.message = "Libros retornados con exito";
      responseJSON.info = rows;
      responseJSON.metainfo = { total: rowCount };
      response.send(responseJSON);
    } catch (error) {
      let responseJSON = {};
      responseJSON.ok = false;
      responseJSON.message = "Error, el servidor no pudo interpretar la solicitud.";
      responseJSON.info = error;
      response.status(400).send(responseJSON);
    }
  },

  async saveLibros(request, response) {
    try {
      let sql = "INSERT INTO public.libros (id, nombre, genero, numero_paginas, anio_publicacion)";
      sql += "VALUES($1, $2, $3, $4, $5);"
      let body = request.body;
      let values = [
      body.id,
      body.nombre,
      body.genero,
      body.numero_paginas,
      body.anio_publicacion
      ];
      await _servicePg.execute(sql, values);
      let responseJSON = {};
      responseJSON.ok = true;
      responseJSON.message = "Se ha guardado la informacion del libro con exito!";
      responseJSON.info = body;
      response.status(201).send(responseJSON);
    } catch (error) {
      console.log(error);
      let responseJSON = {};
      responseJSON.ok = false;
      responseJSON.message = "Error, el servidor no pudo interpretar la solicitud.";
      responseJSON.info = error;
      response.status(400).send(responseJSON);
    }
  },

  async deleteLibros(request, response) {
    try {
      const sql = "DELETE FROM libros WHERE id=$1";
      let id = request.params.id;
      let responseDB = await _servicePg.execute(sql, [id]);
      let rowCount = responseDB.rowCount;
      let responseJSON = {};
      responseJSON.ok = true;
      responseJSON.message = "Se ha eliminado el libro con exito";
      responseJSON.info = [];
      responseJSON.metainfo = { total: rowCount };
      response.send(responseJSON);
    } catch (error) {
      let responseJSON = {};
      responseJSON.ok = false;
      responseJSON.message = "Error, el servidor no pudo interpretar la solicitud.";
      responseJSON.info = error;
      response.status(400).send(responseJSON);
    }
  },

  async updateLibros(request, response) {
    try {
      let id = request.params.id;
      let sql =
      "UPDATE public.libros SET nombre=$1, genero=$2, numero_paginas=$3, anio_publicacion=$4 WHERE id=$5;"
      let body = request.body;
      let values = [
        body.nombre,
        body.genero,
        body.numero_paginas,
        body.anio_publicacion,
        id
      ];
      await _servicePg.execute(sql, values);
      let responseJSON = {};
      responseJSON.ok = true;
      responseJSON.message = "El libro se ha actualizado con exito";
      responseJSON.info = body;
      response.send(responseJSON);
    } catch (error) {
      let responseJSON = {};
      responseJSON.ok = false;
      responseJSON.message = "Error, el servidor no pudo interpretar la solicitud.";
      responseJSON.info = error;
      response.status(400).send(responseJSON);
    } 
  }
}

module.exports = methods;