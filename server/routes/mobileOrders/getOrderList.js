const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../../connection');

var order_id = 0
Router.get('/', (req, res) => {
    mysqlConnection.query("SELECT * FROM mobile_order", (err, rows, fields) => {
        if(err){
            console.log("Error while fetching mobile order", err)
        }
        else{
            res.send(rows)
            console.log(order_id)
            
            console.log(rows[rows.length - 1].order_id)
            order_id = rows[rows.length -1].order_id + 1
            console.log(order_id)
        }
    })
})

Router.post('/add_mobile_order', (req, res) => {
    // console.log(req.body)
    const {order_id, date, brand, model, imei_1, imei_2, qty, price, warranty, c_name, c_mobile, c_address} = req.body;
    mysqlConnection.query(`INSERT INTO mobile_order VALUES(${order_id}, ${date}, '${brand}', '${model}', '${imei_1}', '${imei_2}', ${qty}, ${price}, '${warranty}', '${c_name}', '${c_mobile}', '${c_address}' )`, (err, rows, fields) => {
        if(err){
            console.log("Error while inserting values@@", err)
        }
        else{
            console.log("Query inserted successfully", rows)
        }
    })
})

Router.get('/:id', (req, res) => {
    const {id}  = req.params;
    console.log(id)
    console.log(order_id)

    mysqlConnection.query(`SELECT * FROM mobile_order WHERE order_id= '${id}'`, (err, rows, fields) => {
        if(err){
            console.log("Error", err);
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})

Router.delete('/:id', (req, res) => {
    const {id} = req.params;

    mysqlConnection.query(`DELETE FROM mobile_order WHERE order_id = '${id}'`, (err, rows, fields) => {
        if(err){
            console.log("ERROR", err)
        }
        else{
            res.status(200)
            res.send("deleted rows")
        }
    })
})


module.exports = Router;
