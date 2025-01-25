import mongoose from 'mongoose';

export const connectDB = async () => {
    const dbConnectionString =
        process.env.NODE_ENV === 'production'
            ? process.env.PROD_DB_STRING
            : process.env.DEV_DB_STRING;

    if (!dbConnectionString) {
        console.error('Database connection string is missing.');
        process.exit(1); // Exit process with failure
    }

    try {
        const conn = await mongoose.connect(dbConnectionString);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};
