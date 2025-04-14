import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
// const client = new MongoClient("mongodb://localhost:3003");  --------> USE THIS?

const connectToDB = () => {
  client.connect();
  return client.db("contactBookDataBase").collection("contacts");
};
