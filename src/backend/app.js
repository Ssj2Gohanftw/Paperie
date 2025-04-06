// Configure environment
require('dotenv').config();

// imports
const express = require("express");
const connectDB = require("./db/connect");
const cors = require('cors');



// Router imports
const helloWorldRouter = require('./routes/hello.route');
const customerRouter = require("./routes/customer.route");
const transactionRouter = require('./routes/transaction.route');


// Variable conf
const app = express();
const port = process.env.PORT || 6942;


// Helper functions
const start = async () => {

    try {

        await connectDB(process.env.MONGO_URI);

        app.listen(port, () => {

            console.log(`Listening of port ${port}`);

        })


    }
    catch (error) {
        console.error(error);
    }

}

// Middlewares
app.use(express.json());
app.use(cors());


// Routes
app.use("/", helloWorldRouter);
app.use("/api/customer",customerRouter);
app.use("/api/transaction",transactionRouter);


start()



