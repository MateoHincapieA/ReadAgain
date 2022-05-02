const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.use(require('./routes/index'));

//Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});