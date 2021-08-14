import React, {useState, useEffect} from "react";

import CustomerDetail from "./CustomerDetail";
import Order from './order/index';

function Comp(props){
    const [response, setResponse] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const callAPI = (getId) => {
        let url = "http://localhost:8008/all/" + getId
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                setLoading(false)
            })
    }

    // const handleClick = (order_id) => {
    //     callAPI(order_id)
    // }

    useEffect(() => {
        callAPI(props.id)
    }, [isLoading])
    return(
        <>
        
        
        {isLoading ? 
        // <Button
        //     variant="contained"
        //     color="primary"
        //     onClick={(e) => {
        //         handleClick(1002)
        //     }}
        // >
        //     Click me
        // </Button> 
        'Loading please wait!!!': 
        <div className="main-page">
            <div className="page">
                <div className="inner-section">
                    <div className="top">
                        <div className="line">
                            <img src="./icons/shree.png" alt="shree"></img>
                        </div>
                        <div className="contact">
                            <div className="mobile-no">
                                <h3>Mob no.:</h3>
                                <h3>7039999074</h3>
                            </div>
                        </div>
                        <div className="brand-heading">
                            <h1 className="brand-name">
                                HARI COLLECTION
                            </h1>
                            <div className="store-address">
                                <p>
                                    Mahatma Gandhi nagar, Tata power house, Kalyan (E)
                                </p>
                            </div>
                        </div>
                    </div>
                    <CustomerDetail response={response}/>
                    <Order response={response}/>
                    <div className="bottom">
                        <div className="inner-container">
                            <ul className="term-list">
                                <li className="highlight">
                                    <p>Liquid and physical damage will not cover in warrenty</p>
                                </li>
                                <li className="highlight">
                                    <p>Software issue is not comes under DOA policy</p>
                                </li>
                                <li className="highlight">
                                    <p>Cotact direct to the service center</p>
                                </li>
                                <li className="highlight">
                                    <p>All the accessories have only 6 months warranty</p>
                                </li>
                            </ul>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div> }
        </>
    )
}
export default Comp;