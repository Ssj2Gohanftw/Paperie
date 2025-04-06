const Customer = require('../models/Customer');

const getAllCustomers = async (req, res) => {

    try {
        const customers = await Customer.find({});
        res.status(200).json({ customers });
    }
    catch (error) {
        console.error(error);
        res.status(505).json({ error: "Something went wrong", msg: "I'm going back to 505" })
    }

}


const createCustomer = async (req, res) => {

    try {

        const customer = await Customer.create(req.body);
        res.status(201).json({ customer });
    }

    catch (error) {
        console.error(error);
        res.status(505).json({ error: "Something went wrong", msg: "I'm going back to 505" })
    }

}

const updateCustomer = async (req, res) => {

    try {

        const { id } = req.params;

        const customer = Customer.findOneAndUpdate(
            {
                _id: id
            },
            req.body,
            { new: true }
        );

        if (!customer) {
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

const getCustomer = async (req, res) => {

    try {
        const { id } = req.params;

        const customer = await Customer.findById(id);

        if (!customer) {
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

const deleteCustomer = async (req, res) => {

    try {
        const { id } = req.params;

        const customer = await Customer.findOneAndDelete({ _id: id });

        if (!customer) {
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
    getAllCustomers,
    createCustomer,
    getCustomer,
    deleteCustomer,
    updateCustomer,

}