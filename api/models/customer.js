const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define("customer", {
    name: {
        type: DataTypes.STRING(100), // Set maximum length to 100 characters
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(15), // Set maximum length to 15 characters for phone numbers
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100), // Set maximum length to 100 characters
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    address: {
        type: DataTypes.STRING(255), // Set maximum length to 255 characters
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
);

module.exports = Customer;
