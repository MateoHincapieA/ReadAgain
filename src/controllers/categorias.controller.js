const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '2411',
    database: 'ReadAgain',
    port: '5432'
})

const getCategorias = async(req, res) => {
    const response = await pool.query('SELECT * FROM categorias');
    res.status(200).json(response.rows);
}

const getCategoriasById = async(req, res) => {
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    res.status(200).json(response.rows);
}

const createCategoria = async(req, res) => {
    const { nombre, descripcion } = req.body;
    const response = await pool.query('INSERT INTO categorias(nombre, descripcion) VALUES($1, $2)', [nombre, descripcion]);
    res.json({
        message: 'Categoría agregada satisfactoriamente',
        body: {
            categoria: {nombre, descripcion}
        }
    });
}

const deleteCategoria = async(req, res) => {
    const { id } = req.body;
    const response = await pool.query('DELETE FROM categorias WHERE id = $1', [id]);
    res.json(`Categoria ${id} eliminada satisfactoriamente`);
}

const updateCategoria = async(req, res) => {
    const { id, nombre, descripcion } = req.body;
    const response = await pool.query('UPDATE categorias SET nombre= $1, descripcion = $2 WHERE id = $3', [nombre, descripcion, id]);
    res.json({
        message: 'Categoría actualizada satisfactoriamente',
        body: {
            categoria: {nombre, descripcion}
        }
    });
}

module.exports = {
    getCategorias,
    getCategoriasById,
    createCategoria,
    deleteCategoria,
    updateCategoria
}