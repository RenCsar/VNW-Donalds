import { useState } from "react";
import { Container } from "./Banner.Styled";
import BigmacIcon from '../../../assets/bigmac.svg';
import BatataIcon from '../../../assets/batata.svg';
import SorveteIcon from '../../../assets/sorvete.svg';

const Banner = () => {
    const [destaque, setDestaque] = useState(BigmacIcon);

    const itens = [
        { img: BigmacIcon },
        { img: BatataIcon },
        { img: SorveteIcon },
    ]

    return (
        <Container>
            <div className="layout-container">
                <img src={destaque} alt="item-icon" />
                <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h1>
            </div>
            <div className="itens-container">
                {
                    itens.map((i: { img: string }, index: number) =>
                        <img src={i.img} alt="item-icon" key={index} onClick={() => setDestaque(i.img)} />
                    )
                }
            </div>
        </Container>
    )
}

export default Banner;