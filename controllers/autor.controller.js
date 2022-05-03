const {Pool} = require('pg');
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password:'posgresql',
    database: 'libros',
    port: '5432'
});
const getAutor = async (req,res) => {
    const response = await pool.query('SELECT * FROM autores');
    res.status(200).json(response.rows);
};
const getAutorPorId = async(req,res) =>{
    const response = await pool.query('SELECT FROM autores WHERE id = $1', [req.params.id])
    res.json(response.rows);
};
const updateAutor = async (req,res) => {
    const id = req.params.id;
    const {nombre} = req.body;
    const response = await pool.query('UPDATE autores SET nombre = $1 WHERE id = $2 ', [nombre,id]);
    res.json('Autor actualizado exitosamente')
}
const createAutor = async (req,res) => {
    const {nombre} = req.body;
    const response = await pool.query('INSERT INTO autores (nombre) VALUES ($1)',[nombre]);
    res.json({
        message: 'Autor creado satisfactoriamente',
        body: {
            autor: {nombre}
        }
    })
};
const deleteAutor = async(req,res) => {
    const id = req.params.id;
    const responde = await pool.query('DELETE FROM autor WHERE id = $1', [id])
    res.json('autor ${id} eliminado satisfactoriamente');

}


module.exports = {
    getAutor,
    createAutor,
    getAutorPorId,
    deleteAutor,
    updateAutor
}

