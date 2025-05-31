const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
require('./utils/db');
const Manifest = require('./model/manifest');

const app = express();
const port = 3000;

// Setup
app.set('view engine', 'ejs');
// app.use(expressLayouts);
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
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

app.get('/manifests', async (req, res) => {
  const manifests = await Manifest.find();
  res.render('manifests', {
    title: 'Halaman Manifest',
    manifests,
    msg: req.flash('msg'),
  });
});

app.get('/booking', (request, response) => {
  response.render('booking');
});

app.post('/booking', (req, res) => {
  Manifest.insertMany(req.body).then(() => {
    req.flash('msg', 'Berhasil booking!');
    res.redirect('/manifests');
  });
});

app.listen(port, () => {
  console.log(`best.borneoekspedisi | Listening at http://localhost:${port}`);
});
