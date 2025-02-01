import dotenv from "dotenv";

dotenv.config(); // Load .env file

const config = {
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/sv-shop",
    port: process.env.PORT || 3000,
};

export default config;
