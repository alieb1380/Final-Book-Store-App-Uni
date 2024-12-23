const express = require("express");
const app = express();
// const cors = require("cors");

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config()

// middleware
// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:5173"],
//     credential: true
// }))

// routes
// const bookRoutes = require('./src/books/book.route')
// const orderRoutes = require('./src/orders/order.route')

// app.use("/api/books", bookRoutes)
// app.use("/api/orders", orderRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.use("/", (req, res) => {
        res.send("Book Servers");
      });
}

main().then(() => console.log("MongoDB Connected Successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
