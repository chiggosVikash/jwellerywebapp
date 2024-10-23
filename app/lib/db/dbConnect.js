import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export const dbConnect = async ()=>{
    if (mongoose.connection.readyState >= 1) {
        return mongoose.connection;
    }

    if (!cached.promise) {
        

        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log("New database connection established");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
