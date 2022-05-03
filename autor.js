const express = require('express')
const postgresql = require('postgresql')
const myconnection = require('')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require('./routes/autor'))
const port = process.env.PORT || '3000'
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})



