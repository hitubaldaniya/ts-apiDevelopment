import mongoose from 'mongoose';

const MONGO_URL: string = 'mongodb+srv://username:password@cluster0.udlyqcz.mongodb.net/';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

export { mongoose }