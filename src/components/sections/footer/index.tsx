import FooterButton from "../../ui/footerButton";
import { Container } from "./Footer.Styled";
import Logo from '/logo.svg';
import AndroidIcon from '../../../assets/google-store.svg';
import AppleIcon from '../../../assets/apple-store.svg';

const Footer = () => {
    return (
        <Container>
            <div className="logo-container">
                <img src={Logo} alt="logo-icon" />
                <p>© McDonald’s 2024</p>
            </div>
            <div className="btn-container">
                <FooterButton img={AndroidIcon} />
                <FooterButton img={AppleIcon} />
            </div>
        </Container>
    )
}

export default Footer;