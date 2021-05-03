require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;
//require('./hbs/helpers');

//Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

//Servir contenido estático
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Wilbert Núñez',
        titulo: 'Curso de Node',
        clase: ''
    });

});

app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic', {
        nombre: 'Wilbert Núñez',
        titulo: 'Curso de Node - Generic',
        clase: 'alt'
    });
});

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Wilbert Núñez',
        titulo: 'Curso de Node - elements',
        clase: 'alt'
    });
});

/*app.get('/about', (req, res) => {
    res.render('about');
});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});