import React from "react";

function Table(props){
    const response = props.response;
    // console.log(response)
    var totalprice = 0;
    return(
        <>
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>QTY</th>
                            <th>IMEI</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response.map((order) => (
                            <>
                                <tr key={order.order_id} className="order-tr">
                                    <td className="order-td" key={order.order_id}>{order.order_id}</td>
                                    <td className="order-td">{order.brand}</td>
                                    <td className="order-td">{order.model}</td>
                                    <td className="order-td">{order.qty}</td>
                                    <td className="order-td">
                                        <p>{order.imei_1}</p>
                                        <p>{order.imei_2}</p>
                                    </td>
                                    <td className="order-td">{order.price}</td>
                                    {console.log(totalprice = totalprice + (order.price * order.qty))}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>

                <div className="total-amt">
                    <div className="inner-amt">
                        <h3>Total Amount: </h3>
                        <h3 className="amt">{totalprice}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table;