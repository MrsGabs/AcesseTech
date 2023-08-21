import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import nos from "/nos.jpeg";

import "../styles/components/Sobre.css";
import Button from "react-bootstrap/Button";

const Sobre = () => {
  return (
    <Container id="sobre" className="sobre-container">
      <Col>
        <h2>Sobre nós:</h2>
        <Row style={{justifyContent:"center"}}>
          <img src={nos} alt="" className="mb-3" />
          <Col>
            <p>
              Na AcesseTech, acreditamos no poder da tecnologia para transformar
              vidas. Somos uma organização não governamental dedicada a
              proporcionar acesso equitativo e inclusivo às ferramentas
              tecnológicas e ao conhecimento digital. Nossa missão é capacitar
              indivíduos de todas as idades e origens a explorar, aprender e
              utilizar a tecnologia para alcançar seus objetivos pessoais e
              profissionais.
            </p>
            <Button style={{width:"100%"}} variant="dark" size="lg" href="#contato">Entre em contato</Button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Sobre;
