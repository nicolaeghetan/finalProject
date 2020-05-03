const express = require('express');
const config = require('config');
const mongoose = require('mongoose')

const app = express();


const PORT = config.get('port') || 3000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'),{
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

app.use(require("./routes/index.js"));

app.listen(PORT, () => console.log(`App has been started on ${PORT}... `))
