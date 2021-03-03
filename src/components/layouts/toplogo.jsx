import React from 'react'

import "./toplogo.css"
import GaiaLogo from '../../images/Logo_Gaia_Preservation.svg'
function TopLogo() {
    return (
        <div className="TopLogo">
                <img src={GaiaLogo} className="img-fluid TopLogo-Image" alt="..."></img>     
            <div style={{ textAlign: 'center' }}>
                <h1 className="GaiaLogo-Text">Gaia Presevention</h1>
            </div>

        </div>
    )
}

export default TopLogo