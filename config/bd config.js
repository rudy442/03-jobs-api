import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once("open", () => {
    console.log("Database connected");
  });

  dbConnection.on("error", (err) => {
    console.log("Connection error: ${err}");
  });
};

export default connectDB;
