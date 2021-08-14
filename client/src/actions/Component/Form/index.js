import React from "react";
import OrderForm from "./orderForm";

function Form(props){
    return(
        <>
            <OrderForm modal={props.modal} page={props.page}/>
        </>
    )
}
export default Form;
