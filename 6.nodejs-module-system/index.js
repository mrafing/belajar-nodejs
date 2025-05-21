// MODULE
// Sekumpulan kode yang dapat digunakan kembali, dengan antar muka yang terdefinisi

// NODE MODULES
// Fungsionalitas yang simpel ataupun kompleks yang tersimpan di dalam sebuah file js, yang dapat kita gunakan kembali pada aplikasi node.js
// setiap modul di dalam node.js memiliki konteks-nya masing-masing tidak bisa saling tercampur dengan modul lain pada lingkup global

// Tipe-tipe modules NodeJS
// 1. Core Modules -> module yang sudah dimiliki oleh nodejs di dalam libary nya -> sudah di export tinggal di require
// 2. Local Modules -> module yang kita buat sendiri -> harus di export sendiri
// 3. Third Party Modules -> module yang di buat oleh orang lain / pihat ketiga -> biasa di sebut npm modules karena di simpan kedalam package manager (npm)

/* const fs = require('fs'); // Core Module
const cetakNama = require('./coba'); // local module
const moment = require('moment'); // third party module / npm module / node_modules */

/* const cetakNama = require('./coba');
const PI = require('./coba'); */

const coba = require('./coba');
/* console.log(
        coba.cetakNama('Rafi'), 
        coba.PI, 
        coba.mahasiswa.cetakMhs(), 
        new coba.Orang()
    ); */
    
const rafi = new coba.Orang;
console.log(rafi);
