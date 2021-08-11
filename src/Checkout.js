import React from 'react'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
    {basket?.length ===0 ?(
        <div>
            <h2>Your Shopping cart is empty</h2>
            <p>
                You have no items in your cart. To buy one or more items, click "Add to cart" next to the item
            </p>
        </div>
    ): (
        <div>
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            {basket?.map((item) => {
                return(
            <CheckoutProduct
            item= {item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
             />
            )
        })}
        </div>
    )}
    </div>
    {basket.length > 0 &&(
        <div className="checkout__right">
            <h1>Subtotal</h1>
            <Subtotal/>
            </div>
    )}
 </div>
    );
}

export default Checkout;
