import React from 'react'
import "./Card.scss"

function Card({ item }) {
    return (
        <div className="card">
            <div className="img">
                <img src={item.img} alt="" />
            </div>
            <div className="ditels">
                <h1>{item.title}</h1>
                <div className="price">
                    <h3>USD{item.oldprice}</h3>
                    <h3>USD{item.price}</h3>
                </div>
            </div>


        </div>
    )
}

export default Card