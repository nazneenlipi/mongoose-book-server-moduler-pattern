import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import useRoute from "./modules/books/books.route";
import borrowRoute from "./modules/borrow/borrow.route";

const app = express();

app.use(cors());
app.use(express.json());

// app.use(useRoute);
// app.use(borrowRoute);
app.use("/api/books", useRoute);
app.use("/api/borrow", borrowRoute);


app.get("/", (req, res) => {
  res.send("book store database");
});

app.listen(config.port, () => {
  console.log(`server running port ${config.port}`);
});

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connect`);
  } catch (error) {
    console.error(`server errror ${server}`);
  }
}

server();
