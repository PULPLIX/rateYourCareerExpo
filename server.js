const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
require('dotenv').config();

//server variables
app.set('port',process.env.PORT);
app.set('host',process.env.HOST);

app.use(cors());

//REST API
app.use(require(path.join(__dirname, 'routes/main/main.routes')));
app.use(require(path.join(__dirname, 'routes/carreras/carreras.routes')))
app.use(require(path.join(__dirname, 'routes/estudiantes/estudiantes.routes')))
app.use(require(path.join(__dirname, 'routes/profesores/profesores.routes')))
app.use(require(path.join(__dirname, 'routes/cursos/cursos.routes')))
/*El servidor colapsa con localhost/insertTeacher */ 


app.listen(app.get('port'), () => {
    console.log('Servidor en puerto',app.get('port'));
});