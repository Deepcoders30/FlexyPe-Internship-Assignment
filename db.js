const mongoose = require('mongoose');

//Establishing connection to MongoDB Atlas 
const connect_to_DB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URI);

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error.message);
        process.exit(1);
    }
}

module.exports = connect_to_DB;