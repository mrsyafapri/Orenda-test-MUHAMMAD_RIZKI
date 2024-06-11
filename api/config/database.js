const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });

module.exports = sequelize;