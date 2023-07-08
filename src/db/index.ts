import mongoose from "mongoose";
require("dotenv").config();

export async function connect() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/next-auth");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("DATABASE CONNECT SUCCESS");
    });
    connection.on("error", (err) => {
      console.log("ERROR ON CONNECT DATABASE", err);
      process.exit();
    });
  } catch (err) {
    console.log("SOMETHING WENT WRONG TO CONNECT DATABASE", err);
  }
}
