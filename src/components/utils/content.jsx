import React from 'react'

import './content.css'
function Content(props){
    return(
        <div className="Content" style={props.style}>
                <div className="Cotent-Title">
                    <h1 className="Title">{props.title}</h1>
                </div>
                <div className="Content">
                    {props.children}
                </div>
        </div>
    )
}

export default Content