import CardPromo from "../../ui/cardPromo";
import { Container } from "./Promocao.Styled";
import ProOne from "../../../assets/proOne.svg";
import ProTwo from "../../../assets/proTwo.svg";
import ProThree from "../../../assets/proThree.svg";

const Promocao = () => {

    const promocoes = [
        { img: ProOne, texto: "Que tal um #MéquiNoSofá?" },
        { img: ProTwo, texto: "venha conhecer nossa nova loja" },
        { img: ProThree, texto: "Confira as medidas que o Méqui adotou!" },
    ];

    return (
        <Container>
            <div className="text-container">
                <h2>Promoção</h2>
            </div>
            <div className="card-container">
                {
                    promocoes.map((i: any, index: number) =>
                        <CardPromo key={index} item={i} />
                    )
                }
            </div>
        </Container>
    )
}

export default Promocao;