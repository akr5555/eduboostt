import express from 'express';
// import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
// const bodyParser = require("body-parser")
import Routes from "./routes/route.js"
 import path from 'path';

 const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

const __dirname = path.resolve();

const app = express();


// app.use(express.json());
// app.use (cors());

/* mongoose
    .connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("NOT CONNECTED TO NETWORK", err);
    }); */


app.use(express.static(path.join(__dirname, 'build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json());

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
});
/* app.listen(3000, () => {
  console.log("Server listening on port 3000");
}); */


app.use('/', Routes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});


