require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/product');
const customerRoutes = require('./routes/customer');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

router.get('/', (req, res) => {
    res.send('Welcome to the CusProd API');
});

router.use('/product', productRoutes);
router.use('/customer', customerRoutes);

app.use('/api/v1', router);
app.listen(port, () => {
    console.log(`CusProd API: listening on port ${port}`);
});