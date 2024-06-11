const { responseError, responseSuccess } = require('../utils/responseHandler');
const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return responseSuccess(res, product, 'Product created successfully', 201);
    } catch (error) {
        return responseError(res, 'Failed to create product', 500);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        return responseSuccess(res, products, 'Products retrieved successfully', 200);
    } catch (error) {
        return responseError(res, 'Failed to fetch products', 500);
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return responseError(res, 'Product not found', 404);
        } else {
            return responseSuccess(res, product, 'Product retrieved successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to fetch product', 500);
    }
};

const updateProduct = async (req, res) => {
    try {
        const [updatedRowsCount] = await Product.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRowsCount === 0) {
            return responseError(res, 'Product not found', 404);
        } else {
            const product = await Product.findByPk(req.params.id);
            return responseSuccess(res, product, 'Product updated successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to update product', 500);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedRowsCount = await Product.destroy({ where: { id: req.params.id } });
        if (deletedRowsCount === 0) {
            return responseError(res, 'Product not found', 404);
        } else {
            return responseSuccess(res, null, 'Product deleted successfully', 200);
        }
    } catch (error) {
        return responseError(res, 'Failed to delete product', 500);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}