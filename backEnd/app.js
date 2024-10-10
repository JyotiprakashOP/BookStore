const express = require('express');
const { dbConnect } = require('./connection/connection');
const bookRoute = require('./routes/bookRoutes');
const dotenv = require('dotenv');
const cors = require('cors')

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON data in request body
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;
const hostname = "127.0.0.1";

// Mounting the bookRoute on '/books'
app.use("/books", bookRoute);

app.listen(PORT, hostname, () => {
    console.log("Server is starting at http://" + hostname + ":" + PORT);
    dbConnect();
});
