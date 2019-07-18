process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// fecha vencimiento

// 60 segundo * 60 minutos

process.env.CADUCIDAD_TOKEN = 3600;

process.env.SEED =  process.env.SEED || 'Mateo1010';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}



process.env.URLDB = urlDB;