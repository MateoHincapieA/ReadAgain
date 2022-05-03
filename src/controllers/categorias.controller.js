const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '2411',
    database: 'ReadAgain',
    port: '5432'
})

const getCategorias = async(req, res) => {
    await pool.query('SELECT * FROM categorias')
        .then(response => {
            res.status(200).json(response.rows);
        })
        .catch(err => {
            console.log(err);
        });
    
}

const getCategoriasById = async(req, res) => {
    const { id } = req.body;
    await pool.query('SELECT * FROM categorias WHERE id = $1', [id])
        .then(response => {
            res.status(200).json(response.rows);
        })
        .catch(err => {
            console.log(err);
        }); 
}

const createCategoria = async(req, res) => {
    const { nombre, descripcion } = req.body;
    await pool.query('INSERT INTO categorias(nombre, descripcion) VALUES($1, $2)', [nombre, descripcion])
        .then(response => {
            res.json({
                message: 'Categoría agregada satisfactoriamente',
                body: {
                    categoria: {nombre, descripcion}
                }
            });
        })
        .catch(err => {
            console.log(err);
        }); 
}

const deleteCategoria = async(req, res) => {
    const { id } = req.body;
    await pool.query('DELETE FROM categorias WHERE id = $1', [id])
        .then(response => {
            res.json(`Categoria ${id} eliminada satisfactoriamente`);
        })
        .catch(err => {
            console.log(err);
        }); 
    
}

const updateCategoria = async(req, res) => {
    const { id, nombre, descripcion } = req.body;
   await pool.query('UPDATE categorias SET nombre= $1, descripcion = $2 WHERE id = $3', [nombre, descripcion, id])
    .then(response => {
        res.json({
            message: 'Categoría actualizada satisfactoriamente',
            body: {
                categoria: {nombre, descripcion}
            }
        });
    })
    .catch(err => {
        console.log(err);
    }); 
    
}

module.exports = {
    getCategorias,
    getCategoriasById,
    createCategoria,
    deleteCategoria,
    updateCategoria
}