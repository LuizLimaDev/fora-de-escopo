import mongoose from "mongoose";

async function dbConnection() {
  const stringConnection = process.env.DB_CONNECTION_STRING;

  mongoose.connect(stringConnection);

  return mongoose.connection;
}

export default dbConnection;
