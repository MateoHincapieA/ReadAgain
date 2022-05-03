const express = require('express')
const postgresql = require('postgresql')
const myconnection = require('')
//ejecutamos y asignamos puerto
const app = express()
//middlewares: se van a aejecutar antes de llegar a las rutas, se pasa de json/urlencoded a objeto de javascript
app.use(express.json())
//solo acepta datos simples, nada de imágenes
app.use(express.urlencoded({extended:false}))
//importamos el archivo de las rutas
app.use(require('./routes/autor'))
//ejecutamos y asignamos puerto
const port = process.env.PORT || '3000'
//verificamos que el puerto funciona
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})



