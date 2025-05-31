const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi Flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home
app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Sandhika Galih',
      email: 'sandhikagalih@gmail.com',
    },
    {
      nama: 'Muhammad Rafi',
      email: 'muhammadrafi@gmail.com',
    },
    {
      nama: 'Dilla Novriandini',
      email: 'dillanvr@gmail.com',
    },
  ];
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Halaman Home',
    nama: 'Muhammad Rafi',
    mahasiswa,
  });
});

// Halaman About
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About',
  });
});

// Halaman Contact
app.get('/contact', async (req, res) => {
  //   Contact.find().then((contacts) => {
  //     // res.send(contacts);
  //     res.render('contact', {
  //       layout: 'layouts/main-layout',
  //       title: 'Halaman Contact',
  //       contacts,
  //       msg: req.flash('msg'),
  //     });
  //   }); // Penulisan secara promise

  const contacts = await Contact.find();
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
    msg: req.flash('msg'),
  });
});

// halaman detail contact
app.get('/contact/:nama', async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman detail Contact',
    contact,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
