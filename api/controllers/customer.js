const { responseError, responseSuccess } = require('../utils/responseHandler');
const Customer = require('../models/customer');

const createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        return responseSuccess(res, customer, 'Customer created successfully', 201);
    } catch (error) {
        return responseError(res, 'Failed to create customer', 500);
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        return responseSuccess(res, customers, 'Customers retrieved successfully', 200);
    } catch (error) {
        return responseError(res, 'Failed to fetch customers', 500);
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) {
            return responseError(res, 'Customer not found', 404);
        } else {
            return responseSuccess(res, customer, 'Customer retrieved successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to fetch customer', 500);
    }
};

const updateCustomer = async (req, res) => {
    try {
        const [updatedRowsCount] = await Customer.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRowsCount === 0) {
            return responseError(res, 'Customer not found', 404);
        } else {
            const customer = await Customer.findByPk(req.params.id);
            return responseSuccess(res, customer, 'Customer updated successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to update customer', 500);
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const deletedRowsCount = await Customer.destroy({ where: { id: req.params.id } });
        if (deletedRowsCount === 0) {
            return responseError(res, 'Customer not found', 404);
        } else {
            return responseSuccess(res, null, 'Customer deleted successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to delete customer', 500);
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
}