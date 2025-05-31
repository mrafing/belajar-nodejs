const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('mdridpa@gmail.com'));
// console.log(validator.isMobilePhone('085346037205', 'id-ID'));
// console.log(validator.isNumeric('075346037205'));

// console.log(chalk.bold.bgBlue.black('Hello World!'));
const nama = 'Muhammad Rafi Dwi Putra'
const pesan = chalk`Lorem ipsum dolor {bgRed.black.strikethrough sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama saya : {bgYellowBright.black ${nama}}`;
console.log(pesan)