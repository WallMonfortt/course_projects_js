import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-e-commerce-background-image_401504599.jpg" alt="e-commerce" className="home__image" />
                    <div className="home__row">
                        <Product 
                            id="12321341"
                            title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                            price = {29.99}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        />
                        <Product 
                            id="49538094"
                            title = "Code: The Hidden Language of Computer Hardware and Software"
                            price = {19.99}
                            rating = {4}
                            image = "https://images-na.ssl-images-amazon.com/images/I/41fCM2+anXL._AC_SR400,600_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product 
                            id="4903850"
                            title = "Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price = {999.99}
                            rating = {4}
                            image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                        <Product 
                            id="23445930"
                            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price = {199.99}
                            rating = {3}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                        <Product 
                            id="3254354345"
                            title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price = {98.99}
                            rating = {5}
                            image = "https://m.media-amazon.com/images/I/61i58DAyX4S._AC_UL640_FMwebp_QL65_.jpg"
                        />

                    </div>
                    <div className="home__row">
                        <Product 
                            id="90829332"
                            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price = {1094.98}
                            rating = {4}
                            image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home