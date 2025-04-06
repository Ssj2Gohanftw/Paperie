const Customer = require('../models/Customer');
const Transaction = require('../models/Transaction');

const getAllTransactions = async (req, res) => {

    try {
        const transactions = await Transaction.find({});
        res.status(200).json({ transactions });
    }
    catch (error) {
        console.error(error);
        res.status(505).json({ error: "Something went wrong", msg: "I'm going back to 505" })
    }

}


const createTransaction = async (req, res) => {

    try {
        console.log(req.body);
        const transactions = await Transaction.create(req.body);
        res.status(200).json({ transactions });
    }
    catch (error) {
        console.error(error);
        res.status(505).json({ error: "Something went wrong", msg: "I'm going back to 505" })
    }

}


const updateTransaction = async (req, res) => {

    try {

        const { transactionId } = req.params;

        const transaction = Transaction.findOneAndUpdate(
            {
                transactionId
            },
            req.body,
            { new: true }
        );

        if (!transaction) {
            res.status(404).send({
                error: `No customer found with id: ${id}`,
                msg: "Your customer has gone 404, to buy milk"
            });
            return;
        }

        return res.status(200).json({ success: true, customer });

    }
    catch (error) {
        console.error(error);
        res.status(505).json({ error: "Something went wrong", msg: "I'm going back to 505" })
    }

}



module.exports = {
    getAllTransactions,
    createTransaction,
    updateTransaction
}