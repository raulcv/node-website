//Explicacion del codigo inicial
const express = require('express');
const app =  express(); //este es un objeto - app es servidor
const path = require('path'); // Para evitar si se trabaja en linux, window etc. para ver directorios de una sola forma
//settings  
app.set('port', 3000); //obtener el puerto por el que se ejcuta
app.set('views', path.join(__dirname, 'views')); //aqui indico donde esta la carpeta views
app.engine('html', require('ejs').renderFile); //esto es para render o convertir un .hmtl a .ejs o ejecutarlo como motor de plantilla .ejs
app.set('view engine', 'ejs');//motro de vista o de plantilla, no importo porque express tiene una integracion ya.

//middlewares --> esto se ejcuta antes que las rutas

//routes
app.use(require('./routes/index')); //Una forma de usar

//static files 
app.use(express.static(path.join(__dirname, 'public'))); //
//Servidor escuchando
app.listen(app.get('port'), () => { //servidor ejecutate en el puerto 3000 y muestrame un mensaje --> console.log("")
    console.log('Server on port', app.get('port'));
});