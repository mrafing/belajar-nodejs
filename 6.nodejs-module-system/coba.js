// console.log('Hello World');

function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : "Doddy Ferdiansyah",
    umur : 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama}, saya ${this.umur} tahun,`;
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah di buat');
    };
}

/* module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
module.exports.Orang = Orang; */

/* module.exports = {
    cetakNama: cetakNama,
    PI : PI,
    mahasiswa : mahasiswa,
    Orang : Orang
} */

// ES6
module.exports = {cetakNama, PI, mahasiswa, Orang}