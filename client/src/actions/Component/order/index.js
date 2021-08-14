import React from "react";

import ShowCase from "./ShowCase";
import Table from "./Table";
function Order(props){
    const response = props.response;
    return(
        <>
            <div className="order-detail">
                <div className="section-heading">
                    <h1>Order detail</h1>
                </div>
                <div className="inner-container">
                    <div className="order-main-container">
                        <ShowCase/>
                        <Table response={response}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Order;