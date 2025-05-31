const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log('koneksi gagal!');
  }

  // pilih database
  const db = client.db(dbName);

  // Menambahkan 1 data ke collection mahasiswa
  db.collection('mahasiswa').insertOne(
    {
      nama: 'Rafi',
      email: 'rafi@gmail.com',
    },
    (error, result) => {
      if (error) {
        return console.log('gagal menambahkan data!');
      }
      console.log(result);
    }
  );

  // Menambahkan lebih dari 1 data
  db.collection('mahasiswa').insertMany(
    [
      {
        nama: 'Erik',
        email: 'erik@yahoo.com',
      },
      {
        nama: 'Avip',
        email: 'avip@gmail.com',
      },
    ],
    (error, result) => {
      if (error) {
        return console.log('data gagal ditambahkan!');
      }

      console.log(result);
    }
  );

  // Menampilkan semua data yang ada di collection 'mahasiswa'
  console.log(
    db
      .collection('mahasiswa')
      .find()
      .toArray((error, result) => {
        console.log(result);
      })
  );

  // Menampilkan data berdasarkan kriteria yang ada di collection 'mahasiswa'
  console.log(
    db
      .collection('mahasiswa')
      .find({ _id: ObjectId('6839764db04ab8abf1a8e714') })
      .toArray((error, result) => {
        console.log(result);
      })
  );

  // Mengubah data berdasarkan id
  const updatePromise = db.collection('mahasiswa').updateOne(
    {
      _id: ObjectId('68397a64925b3a3a383bedff'),
    },
    {
      $set: {
        nama: 'Avip Syaifullah',
        email: 'avip@yahoo.com',
      },
    }
  );

  updatePromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  // Mengubah data lebih dari 1, berdasarkan kriteria
  db.collection('mahasiswa').updateMany(
    {
      nama: 'Erik',
    },
    {
      $set: {
        nama: 'Erik Doank',
      },
    }
  );

  //   Menghapus 1 data
  db.collection('mahasiswa')
    .deleteOne({
      _id: ObjectId('68397a64925b3a3a383bedff'),
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  // Menghapus lebih dari 1 data
  db.collection('mahasiswa')
    .deleteMany({
      nama: 'Erik Doank',
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Contoh menggunakan mongodb di nodejs versi 6.16.0 -> menggunakan gaya penulisan promise
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    // pilih database
    const db = client.db(dbName);

    // menambahkan 1 data ke collection mahasiswa
    const insertResult = await db.collection('mahasiswa').insertOne({
      nama: 'Dinda',
      email: 'dinda@gmail.com',
    });

    console.log('Data berhasil ditambahkan:', insertResult);
  } catch (error) {
    console.log('Koneksi gagal!', error);
  } finally {
    await client.close(); // opsional
  }
}

main();
