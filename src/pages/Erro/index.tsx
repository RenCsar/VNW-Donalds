import { Container } from "./Error.Styled";
import Batata from '../../assets/batata-bk.png';

const Erro = () => {
  return (
    <Container>
      <div className="container-geral">
        <img src={Batata} alt="barara-icon" />
        <h1><span>Error 404</span> Página não encontrada</h1>
      </div>
      <p>Volte para a página inicial, nada bom será encontrado por aqui ;)</p>
    </Container>
  )
}

export default Erro;