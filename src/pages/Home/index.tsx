import Banner from "../../components/sections/banner";
import Promocao from "../../components/sections/promocao";
import { Container } from "./Home.Styled";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Promocao />
    </Container>
  )
}

export default Home;