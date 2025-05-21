// Core Module
// File System
const fs = require('fs');

// menuliskan string ke file (synchronous)
/* try {
    fs.writeFileSync('data/test.txt', 'Hello World secara sync!');

} catch(e) {
    console.log(e)
} */

// menuliskan string ke file (asynchronous)
/* fs.writeFile('data/test.txt', 'Hello World secara Async', (e) => {
    console.log(e);
}) */

// membaca isi file (sync)
/* const data = fs.readFileSync('data/test.txt', 'utf-8');
console.log(data); */


// membaca isi file (async)
/* fs.readFile('datas/test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
    console.log(data);
    }
); */

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda : ', (noHP) => {
        const contact = {nama,noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts = JSON.parse(file);
    
        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terimakasih sudah memasukkan data.')
        
        rl.close();
    })
})
