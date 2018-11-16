const express = require('express');

const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
//Express  HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// app.get('/', (req, res) => {


//     let salida = {
//         nombre: 'Ernest',
//         edad: 6,
//         url: req.url
//     }
//     res.send(salida);
//     // res.send('Hola Mundo');
// });

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'ernest'
    });

});

app.get('/about', (req, res) => {



    res.render('about', {
        nombre: 'Ernest'
    });
});


app.listen(port, () => {
    const port = process.env.PORT || 3000;
    console.log(`Escuchando peticones en el puerto ${port}`);
});

// app.listen(3000, () => {
//     console.log('Escuchando peticones en el puerto 3000');
// });