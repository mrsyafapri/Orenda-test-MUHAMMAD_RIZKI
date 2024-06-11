const Customer = require('../models/customer');

const createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create customer.' });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch customers.' });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found.' });
        } else {
            res.json(customer);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch customer.' });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const [updatedRowsCount] = await Customer.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRowsCount === 0) {
            res.status(404).json({ message: 'Customer not found.' });
        } else {
            const customer = await Customer.findByPk(req.params.id);
            res.json(customer);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update customer.' });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const deletedRowsCount = await Customer.destroy({ where: { id: req.params.id } });
        if (deletedRowsCount === 0) {
            res.status(404).json({ message: 'Customer not found.' });
        } else {
            res.json({ message: 'Customer deleted successfully.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete customer.' });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}