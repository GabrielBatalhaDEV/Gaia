import React from 'react'

import './card.css'
function Card(props) {
    return (
        <div className="card Card" style={{width: "18rem"}}>
            <img className="img-fluid" src={props.image} alt="Card"></img>
            <div className="card-body">
                <h5 className="card-title" style={{fontSize: "2.6vw"}}>{props.title}</h5>
                <p className="text-left">{props.text}</p>
            </div>
            <div className="Card-Buttons d-inline">
                <a href="#"><p>Ler mais</p></a>
            </div>
        </div>
    )
}

export default Card