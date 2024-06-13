const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("product", {
    name: {
        type: DataTypes.STRING(100), // Set maximum length to 100 characters
        allowNull: false,
    },
    unit: {
        type: DataTypes.INTEGER, // Set as INTEGER
        allowNull: false,
        validate: {
            min: 0, // Ensure unit is non-negative
        },
    },
    price: {
        type: DataTypes.DECIMAL(10, 2), // Set as DECIMAL with precision 10 and scale 2
        allowNull: false,
        validate: {
            min: 0, // Ensure price is non-negative
        },
    },
},
    {
        timestamps: false,
    }
);

module.exports = Product;
