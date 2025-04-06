const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({

    transactionId: {
        type:String,
        required:[true,"Gimme Transaction id fas fas"]
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        required:true,
    },

    completed:{
        type:Boolean,
        default: false
    }

});


module.exports = mongoose.model('Transaction',transactionSchema);