import React,  {useState, useEffect} from "react";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
import AddIcon from '@material-ui/icons/Add';

import Print from "../print";
import Form from "../Form/index";

function OrderList(){
    const [response, setResponse] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isOpenViewModal, setIsOpenViewModal] = useState(false)
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [orderId, setOrderId] = useState('');

    const callAPI = () => {
        let url = "http://localhost:8008/all/"
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                setLoading(false)
                // console.log(res)
            })
    }

    const deleteRecord = (getId) => {
        let url = "http://localhost:8008/all/" + getId
        console.log("delete", url)
        fetch(url, {
            method: "DELETE",
            headers:{
                "Content-type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                setLoading(false)
            })
    }


    useEffect(() => {
        callAPI()
    }, [])

    const handleClickMe = (id) => {
        setIsOpenViewModal(true)
        setOrderId(id);
    }

    const handleDeleteModal = (id) => {
        setIsOpenDeleteModal(true)
        setOrderId(id)
    }

    const handleAddModal = () => {
        setIsOpenAddModal(!isOpenAddModal)
    }

    const handleDeleteRecord = (id) => {
        deleteRecord(id);
        setIsOpenDeleteModal(false)
        refreshPage()
    } 

    const refreshPage = () => {
        window.location.reload(false);
    }

    return(
        <>
            {isLoading ? 'Loading...' : 
            <div className="table-page">
                {/* {console.log(response)} */}
                <div className="section-heading flex">
                    <h1>List of all orders</h1>
                    <Button
                        variant="outlined"
                        color="default"
                        className="add-order-btn"
                        onClick={handleAddModal}
                    >
                        <AddIcon/>
                    </Button>
                </div>
                <div className="list-container">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order id</th>
                                    <th>Customer Name</th>
                                    <th>Customer Mobile</th>
                                    <th>Customer Address</th>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>QTY</th>
                                    <th>IMEI</th>
                                    <th>Price</th>
                                    <th>GetId</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {response.map((order) => (
                                <>
                                    <tbody key={order.order_id}>
                                        <tr>
                                            <td>{order.order_id}</td>
                                            <td>{order.c_name}</td>
                                            <td>{order.c_mobile}</td>
                                            <td>{order.c_address}</td>
                                            <td>{order.brand}</td>
                                            <td>{order.model}</td>
                                            <td>{order.qty}</td>
                                            <td>
                                                <p>{order.imei_1}</p>
                                                <p>{order.imei_2}</p>
                                            </td>
                                            <td>{order.price}</td>
                                            <td>
                                                <Button
                                                    variant="text"
                                                    color="primary"
                                                    onClick={(e) => {
                                                        handleClickMe(order.order_id)
                                                    }}
                                                >
                                                    View  
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    color="secondary"
                                                    variant="text"
                                                    onClick={(e) => {
                                                        handleDeleteModal(order.order_id)
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                            {/* {console.log(totalprice = totalprice + order.price)} */}
                                        </tr>
                                    </tbody>
                                </>
                            ))}
                        </table>
                    </div>
                </div>
                <Modal
                    className="print-modal"
                    contentLabel="Bill"
                    isOpen={isOpenViewModal}
                    onRequestClose={(e) => {
                        setIsOpenViewModal(false)
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={(e) => {
                            setIsOpenViewModal(false)
                        }}
                    >
                        X
                    </Button>
                    <Print id={orderId}/>
                </Modal>

                <Modal
                    isOpen={isOpenDeleteModal}
                    className="delete-modal"
                    contentLabel="Delete record"
                    onRequestClose={(e) => setIsOpenDeleteModal(false)}
                >
                    <h1 className="confirmation-heading">Are you sure want to delete record with id {orderId}?</h1>
                    <div className="confirmation-btn-container">
                        <Button className="delete-btn" variant="contained" color="secondary" onClick={() => handleDeleteRecord(orderId)}>Delete</Button>
                        <Button className="cancel-btn" variant="contained" color="default" onClick={(e) => setIsOpenDeleteModal(false)}>Cancel</Button>
                    </div>
                </Modal>
                <Modal
                    isOpen={isOpenAddModal}
                    className="add-modal"
                    contentLabel="Delete record"
                    onRequestClose={handleAddModal}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleAddModal}
                    >
                        Close
                    </Button>

                    <Form modal={setIsOpenAddModal} page={refreshPage} />
                </Modal>
            </div>
        }  
        </>
    )
}
export default OrderList;