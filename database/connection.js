require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@codegymsinhhuy.f3unv23.mongodb.net/`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB connected`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;