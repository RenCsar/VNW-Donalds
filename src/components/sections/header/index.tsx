import HeaderButton from "../../ui/headerButton";
import { Container } from "./Header.Styled";
import Logo from '/logo.svg';
import AppLogo from '../../../assets/app-logo.svg';
import OrderLogo from '../../../assets/order-logo.svg';
import { THeaderButtonProps } from "../../../utils/types";

const Header = () => {

    const buttons = [
        { texto: "Baixe o App", img: AppLogo, background: "branco" },
        { texto: "Peça seu Méqui", img: OrderLogo, background: "amarelo" },
    ];

    return (
        <Container>
            <img src={Logo} alt="logo" className="logo-img" />
            <div className="btn-container">
                {
                    buttons.map((button: THeaderButtonProps) =>
                        <HeaderButton texto={button.texto} img={button.img} background={button.background} />
                    )
                }
            </div>
        </Container>
    )
}

export default Header;