import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://www.webfx.com/wp-content/uploads/2021/10/amazon-ads-1.png" alt="ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <CheckoutProduct 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        
                    />
                    <CheckoutProduct 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        
                    />
                    <CheckoutProduct 
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        
                    />
                </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout