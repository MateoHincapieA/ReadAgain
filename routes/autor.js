const {Router} = require('express');
//para definir las rutas del servidor
const router = Router();
module.exports = router;
const {getAutor, deleteAutor, updateAutor} = require('../controllers/autor.controller');
const {createAutor,getAutorPorId } = require('../controllers/autor.controller');
router.get('/autor',getAutor);
router.get('/autor:id', getAutorPorId);
router.post('/autor', createAutor);
router.delete('/autor:id', deleteAutor);
router.put('/autor:id',updateAutor);