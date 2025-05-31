const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

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

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About',
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
  });
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman detail Contact',
    contact,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});
