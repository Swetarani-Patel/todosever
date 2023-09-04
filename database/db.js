import mongoose from "mongoose"; 
import dotenv from 'dotenv'
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {
    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-zz8nrip-shard-00-00.z8ix4yv.mongodb.net:27017,ac-zz8nrip-shard-00-01.z8ix4yv.mongodb.net:27017,ac-zz8nrip-shard-00-02.z8ix4yv.mongodb.net:27017/?ssl=true&replicaSet=atlas-32amtb-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database is connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database is disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting the database', error.message);
    });
}
