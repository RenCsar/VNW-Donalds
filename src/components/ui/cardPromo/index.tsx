import { TCardPromoProps } from "../../../utils/types";
import HeaderButton from "../headerButton";
import { Container } from "./CardPromo.Styled";

const CardPromo = ({ item }: TCardPromoProps) => {
    return (
        <Container>
            <img src={item.img} alt="card-imagem" />
            <h2>{item.texto}</h2>
            <HeaderButton texto="Clique Aqui" background="amarelo" />
        </Container>
    )
}

export default CardPromo;