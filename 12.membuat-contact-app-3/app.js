const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHp: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHp: argv.noHp
        };
        contacts.simpanContact(argv.nama, argv.email, argv.noHp)
    }
})
.demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();
    }
})

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
})

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    }
})

yargs.parse();
