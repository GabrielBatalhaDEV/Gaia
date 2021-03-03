import React from 'react'
import Content from './utils/content.jsx'

import ongimage1 from '../images/ongimage1.svg'
import image1 from '../images/1.svg'
import image2 from '../images/2.svg'
import image3 from '../images/3.svg'
import campaingImage from '../images/Campaing-Image.svg'

import Card from "./layouts/card.jsx"
import Donation from './layouts/donation.jsx'
import './contentbox.css'
function ContentBox() {
    return (
        <div className="ContentBox .container">
            <Content title="Quem Somos?" style={{ padding: "10px" }}>
                <p>
                    Somos uma ONG sem fins lucrativos e colaborativa,
                    que trabalha em conjunto com a população através de prráticar simples e hábitos
                    sustentaveis.
                </p>
                <p>
                    Nosso principal objetivo é contribuir para preservação de árvores brasileiras que estão
                    ameaçadas de extinção, por meio de distribuição de sementes e mudas, e o patrocinío de
                    eventos sociais educativos que visam incentivar a população a plantar árvores.
                </p>
                <p>
                    Dessa forma, usamos esse site como principal meio de comunicação e divulgação,
                    atráves dele é possivel fazer doações, participar de campanhas e ficar por dentro dos
                    eventos que estão por vir.
                </p>

                <div>
                    <img src={ongimage1} className="img-fluid image-center" alt="image world" />
                </div>
            </Content>
            <Content title="Boas Praticas">
                <div className="Cards-List">
                    <Card image={image1} title="Como plantar uma árvore"
                        text="Aqui nesse artigo ensinamos a melhor maneira de plantar uma árvore."></Card>
                    <Card image={image2} title="Como fazer uma composteira"
                        text="Uma ótima forma de produzir adubos orgânicos é através da composteira."></Card>
                    <Card image={image3} title="Escolhas sustentáveis"
                        text="Confira algumas mudanças simples no seu dia a dia que podem ajudar a natureza." ></Card>
                </div>

            </Content>
            <Content title="Campanha" style={{padding: "20px"}}>
                <Donation image={campaingImage}></Donation>
            </Content>
        </div>
    )
}

export default ContentBox