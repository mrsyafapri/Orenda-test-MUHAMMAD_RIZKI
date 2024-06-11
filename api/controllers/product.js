const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product.' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products.' });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found.' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch product.' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const [updatedRowsCount] = await Product.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRowsCount === 0) {
            res.status(404).json({ message: 'Product not found.' });
        } else {
            const product = await Product.findByPk(req.params.id);
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product.' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedRowsCount = await Product.destroy({ where: { id: req.params.id } });
        if (deletedRowsCount === 0) {
            res.status(404).json({ message: 'Product not found.' });
        } else {
            res.json({ message: 'Product deleted successfully.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product.' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}