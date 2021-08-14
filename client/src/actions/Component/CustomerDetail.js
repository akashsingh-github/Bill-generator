import React from "react";

function CustomerDetail(props){
    const order = props.response;
    console.log(order)
    return(
        <>
            <div className="customer-detail">
                <div className="section-heading">
                    <h1>Customer detail</h1>
                </div>
                <div className="inner-container">
                    <div className="line-1">
                        <div className="inner-grid">
                            <h4>Name: </h4>
                            <h4>{order[0].c_name}</h4>
                        </div>
                    </div>
                    <div className="line-2">
                        <div className="inner-grid">
                            <h4>Mobile No.: </h4>
                            <h4>{order[0].c_mobile}</h4>
                        </div>
                        <div className="inner-grid">
                            <h4>Date: </h4>
                            <h4>02-06-2021</h4>
                        </div>
                    </div>
                    <div className="line-3">
                        <div className="inner-grid">
                            <h4>Address: </h4>
                            <h4>{order[0].c_address}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomerDetail;