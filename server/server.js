require('./config/config');

const bodyparser = require('body-parser');

const mongoose = require('mongoose');


const app = require('./routes/usuario');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

mongoose.connect('mongodb+srv://dara:9yzdost2ZNr8xFKb@cluster0-ymjpg.mongodb.net/cafe', 
    {useCreateIndex:true, useNewUrlParser: true }
    ,(err, res) => {
    if (err) throw err;

    console.log('Base de datos online!');
});

app.listen(process.env.PORT, ()=> {
    console.log(`esta corriendo la app ${process.env.PORT}`);
});