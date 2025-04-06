const express = require("express");
const { getAllTransactions, createTransaction, updateTransaction } = require("../controllers/transaction.controller");
const router = express.Router();


router.route("/").get(getAllTransactions).post(createTransaction);
router.route("/:transactionId").patch(updateTransaction);

module.exports = router;