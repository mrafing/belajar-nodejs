const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built-in middleware
app.use(express.static('public'));

// Appliaction level Middleware
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama : 'Sandhika Galih',
            email: 'sandhikagalih@gmail.com'
        },
        {
            nama : 'Muhammad Rafi',
            email: 'muhammadrafi@gmail.com'
        },
        {
            nama : 'Dilla Novriandini',
            email: 'dillanvr@gmail.com'
        }
    ]
    res.render('index', { 
        layout : 'layouts/main-layout',
        title: 'Halaman Home',
        nama: 'Muhammad Rafi',
        mahasiswa
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID :  ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use((req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});