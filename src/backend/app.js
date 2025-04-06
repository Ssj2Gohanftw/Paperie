// Configure environment
require('dotenv').config();

// imports
const express = require("express");
const app = express();
const port = process.env.PORT || 6942
const connectDB = require("./db/connect");


// Router imports
const helloWorldRouter = require('./routes/hello.route');
const customerRouter = require("./routes/customer.route");
const transactionRouter = require('./routes/transaction.route');



// Helper functions
const start = async () => {

    try {

        await connectDB(process.env.MONGO_URI);

        app.listen(port, () => {

            console.log(`Listening of port ${port}`)

        })


    }
    catch (error) {
        console.error(error);
    }

}

// Middlewares
app.use(express.json());


// Routes
app.use("/", helloWorldRouter);
app.use("/api/customer",customerRouter);
app.use("/api/transaction",transactionRouter);


start()



