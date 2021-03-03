import React from 'react'

import './donation.css'
function Donation(props){
    return(
        <div className="donation">
                    <div className="campaing">
                    <div className="campaing-title text-center">
                        <h3 style={{fontSize:"2vw"}}>Jacarandá-Branco</h3>
                    </div>
                    <div className="campaing-about">
                        <div className="campaing-image">
                            <img src={props.image} alt="Jacarandá-Branco" className="img-fluid" />
                        </div>
                    </div>
                     <div className="campaing-text">
                            <p>
                                A gaia Presenvation realiza com o apoio de seus voluntários a campanha do mês de novembro 2020.
                                
                            </p>
                            <p>
                                O tema desse mês é a nativa Jacarandá-Branco
                            </p>
                        </div>
                    </div>
                    
                    <form className="form-gaia">
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="input-gaia form-control" placeholder="Nome"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="input-gaia form-control" placeholder="Sobrenome"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email" className="input-gaia form-control"/>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text" placeholder="Cidade" className="input-gaia form-control"/>
                                </div>
                                <div className=" col">
                                    <input type="text" placeholder="UF" className="input-gaia form-control"/>

                                </div>
                            </div>
                        </div>
                        <div className="form-group" style={{padding:"0px"}}>
                            <input type="text" placeholder="Endereço" className="input-gaia form-control"/>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="input-gaia form-control" placeholder="Numero"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="input-gaia form-control" placeholder="Complemento"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="mx-auto">
                                    <button className="btn-gaia-donation">R$ 20</button>

                                </div>
                                <div className="mx-auto">
                                    <button className="btn-gaia-donation">R$ 50</button>

                                </div>
                                <div className="mx-auto">
                                    <button className="btn-gaia-donation">R$ 100</button>
                                </div>
                                <div className="mx-auto">
                                    <button className="btn-gaia-donation">R$ 200</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
    )
}

export default Donation