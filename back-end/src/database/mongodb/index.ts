import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI: string = process.env.MONGO_URI;
        await connect(mongoURI);
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(JSON.stringify(err));
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;