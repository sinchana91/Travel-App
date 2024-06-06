import { connect } from 'mongoose';
import { config } from 'dotenv';

config();

const connectDB = async () => {
    try {
        await connect(process.env.DATABASE_URL, {
            
            
            serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
        });
        console.log('Connected to DB');
    } catch (err) {
        console.error('Failed to connect to DB:', err);
        process.exit(1);
    }
};

connectDB();

export default connectDB;
