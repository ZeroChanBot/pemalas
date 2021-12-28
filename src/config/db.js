const config = require("../config/values");
const monk = require("monk");
const mongoose = require('mongoose');
const url = 'mongodb+srv://Zyxmaple:ramajelek@cluster0.mn1td.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
function PemalasDB() {
    mongoose.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connect to DB success!');
    });
};

module.exports.PemalasDB = PemalasDB;
