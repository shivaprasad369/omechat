const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(`mongodb+srv://Shivaprasad:Shivu2000@cluster0.5wetoyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
