import express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";

const port = 8080;
const DB_URL =
  "mongodb+srv://Ivan_Trishin:Baraban1734@cluster0.obokn.mongodb.net/todos";
const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => console.log("server started on"));
  } catch (error) {
    console.log(error);
  }
}

startApp();
