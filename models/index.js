const mongoose = require('mongoose');

const Grid = require('./grid');
const Road = require('./road');

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL);
}

const models = { Grid, Road };

// export { connectDb };

// export default models;

module.exports = {
    connectDb,
    models
}