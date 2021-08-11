import React from 'react';
import "./Subtotal.css";
import {useStateValue} from "./StateProvider";
function Subtotal() {
    const[{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            
            <button>Proceed to Checkout</button>
            
        </div>
    )
    
}

export default Subtotal
