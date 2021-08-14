import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
function OrderForm(props){

    const setIsAddModalOpen = props.modal;
    const [response, setResponse] = useState(null)
    const [isLoading, setLoading] = useState(true)
    


    const callAPI = (order) => {
        console.log("Calliong")
        fetch("http://localhost:8008/all/add_mobile_order", {
            method: "POST",
            headers:{
                "Content-type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                console.log(order)
                // console.log(res)
                setLoading(false)
            })
    }

    // useEffect(() => {
    //     callAPI()
    //     console.log("cotrs")
    //     // console.log(response)
    // }, [isLoading])

    const handleSubmit = (order) => {
        // callAPI(order)
        // setIsAddModalOpen(false)
        // props.page();
        if(
            orderDetails.order_id!== 0 && 
            orderDetails.brand!== '' && 
            orderDetails.date!=='' && 
            orderDetails.model!== '' &&
            orderDetails.imei_1!== '' && 
            orderDetails.imei_2 !== '' &&
            orderDetails.qty !== 0 &&
            orderDetails.price !== 0 &&
            orderDetails.warranty !== '' &&
            orderDetails.c_name !== '' &&
            orderDetails.c_mobile !== '' &&
            orderDetails.c_address !== '' 
        ){
            callAPI(order)
            setIsAddModalOpen(false)
            props.page()
        }
        else{
            alert("Fill all the textfields")
        }
    }

    let orderDetails = {
        order_id: 0,
        brand: '',
        date: '00',
        model: '',
        imei_1: '',
        imei_2: '',
        qty: 0,
        price: 0,
        warranty: '',
        c_name: '',
        c_mobile: '',
        c_address: ''
    }


    return(
        <>
            <div className="form-section">
                <div className="form-heading">
                    <h1>Order form</h1>
                </div>
                <div className="form-container">
                    <div className="form-layout">
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Order id"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            onChange={(e) => {
                                                orderDetails.order_id = e.target.value
                                            }}
                                            required
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Brand"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            onChange={(e) => {
                                                orderDetails.brand = e.target.value
                                            }}
                                            required
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Model"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.model = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="IMEI 1"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.imei_1 = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="IMEI 2"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.imei_2 = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Quantity"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.qty = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Price"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.price = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Warranty"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.warranty = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Customer Name"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.c_name = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Customer mobile"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.c_mobile = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            label="Customer Address"
                                            variant="outlined"
                                            color="primary"
                                            required
                                            fullWidth
                                            onChange={(e) => {
                                                orderDetails.c_address = e.target.value
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                            
                            </Grid>
                        </form>
                        <Button
                            color="primary"
                            variant="contained"
                            className="submit-btn"
                            onClick={(e) => {
                                console.log(orderDetails)
                                handleSubmit(orderDetails)
                            }}
                            type="submit"
                            id="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderForm;