const express = require('express');
const router = express.Router();

const { getCategorias, createCategoria, deleteCategoria, getCategoriasById, updateCategoria } = require('../controllers/categorias.controller');

router.get('/categorias', getCategorias);

router.get('/categorias/byId', getCategoriasById);

router.post('/categorias/add', createCategoria);

router.delete('/categorias/delete', deleteCategoria);

router.put('/categorias/update', updateCategoria);

module.exports = router;