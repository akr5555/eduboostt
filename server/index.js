import express from 'express';
// import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
// const bodyParser = require("body-parser")
import Routes from "./routes/route.js"
 import path from 'path';

 const PORT = 3000;

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
 const __dirname = path.resolve();
const app = express();



app.use(express.json());
// app.use (cors());

mongoose
    .connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("NOT CONNECTED TO NETWORK", err);
    });


app.use(express.static(path.join(__dirname, '/client/build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.use('/', Routes);

/* app.listen(3000, () => {
  console.log("Server listening on port 3000");
}); */



app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
