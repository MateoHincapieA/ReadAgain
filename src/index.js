const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/categorias'));

//Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});