const express = require('express');
const router = express.Router(); //Modulo de expres para crear multiples rutas

router.get('/', (req, res) => {//cuando te pida una ruta incial pues con una funcion enviar algo.
    //envie como rpta este msm --aqui se envia htmls, imagenes etc
    //console.log(__dirname + '/views/index.html'); // dirname da la direccion de donde se ejecuta el archivo
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title: 'first web site'}); //No es necesario decir index.ejs porque al decir render ya sabe el motor de plantillas
});

router.get('/contact', (req, res) => {//cuando te pida una ruta incial pues con una funcion enviar algo.
    //res.render('contact', {title: 'Pagina de contacto'}); //No es necesario decir index.ejs porque al decir render ya sabe el motor de plantillas
    res.render('contact.html', {title: 'Pagina de contacto'});//esto ahgo cuando quiero usar un arhcivo .html y no .ejs
});

module.exports = router;