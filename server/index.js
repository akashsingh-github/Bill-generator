const express = require('express')
const bodyParser = require('body-parser')
const getOrderList = require('./routes/mobileOrders/getOrderList');
const cors = require('cors');



var app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/all', getOrderList)

app.get('/', (req, res) => {
    res.send("Welcome on the home page again!!!")
})

app.listen(8008, () => {
    console.log("Server is running on port 8008!!!");
})
