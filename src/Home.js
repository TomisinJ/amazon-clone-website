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
                    title='The Lean Startup: a book about startups that are lean'
                    price={5.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={5}
                />
                <Product
                    id='123456'
                    title='The Lean Startup'
                    price={6.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={4}
                />            </div>

            <div className="home__row">
                <Product
                    id='123456'
                    title='The Lean Startup, this isnt a paperback book, this is an audio book'
                    price={7.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={3}
                />
                <Product
                    id='123456'
                    title='The Lean Startup'
                    price={8.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={2}
                />
                <Product
                    id='123456'
                    title='The Lean Startup'
                    price={9.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={3}
                />
            </div>

            <div className="home__row">
            <Product
                    id='123456'
                    title='The Lean Startup, you can buy this if you want, but the others are cheaper'
                    price={10.99}
                    image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF894,1000_QL80_.jpg'
                    rating={1}
                />
            </div>

            </div>
        </div>
    )
}

export default Home;