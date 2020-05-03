const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = config.get('port') || 3000;

app.use(routes);

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

    } catch(err) {
        console.log(`Server Error`, err.message);
        
    }
}
start();



app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`))
