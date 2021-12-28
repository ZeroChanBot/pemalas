const config = require("../config/values");
const monk = require("monk");
const mongoose = require('mongoose');
const url = config.mongoUrl;
function PemalasDB() {
    mongoose.connect(dbURI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connect to DB success!');
    });
};

module.exports = PemalasDB;
