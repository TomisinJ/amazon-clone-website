import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src='https://m.media-amazon.com/images/I/61hrvjlM7kL._SX3000_.jpg'/>

            <div className="home__row">
                <Product
                    id='123456'
                    title='The Lean Startup'
                    price={12.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={3}
                />
                <Product/>
            </div>

            <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className="home__row">
                <Product/>
            </div>

            </div>
        </div>
    )
}

export default Home;