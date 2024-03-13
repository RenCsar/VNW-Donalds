import { Outlet } from "react-router-dom";
import Footer from "../../components/sections/footer";
import Header from "../../components/sections/header";
import { Container } from "./DefaultPage.Styled";

const DefaultPage = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default DefaultPage;