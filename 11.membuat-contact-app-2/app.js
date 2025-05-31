const yargs = require("yargs");
const { simpanContact } = require("./contacts");

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
        simpanContact(argv.nama, argv.email, argv.noHp)
    }
});

yargs.parse();
