const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rw494.mongodb.net/CSE341PersonalProject?retryWrites=true&w=majority`;

const connectDB = async () => {
    await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log("DB Connected")
}

module.exports = connectDB;