import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardBT from "./CardBT";

import "../styles/components/Valores.css";

const cards = [
  {
    img: "/valores.jpg",
    text: "Tornamos a tecnologia acessível a todos, independentemente de sua experiência anterior.",
  },
  {
    img: "/valores2.webp",
    text: "Criamos uma rede de apoio onde compartilhamos conhecimento e incentivamos o crescimento mútuo.",
  },
  {
    img: "/valores3.jpg",
    text: "Buscamos soluções tecnológicas inovadoras para desafios locais e globais, com foco na sustentabilidade.",
  },
  {
    img: "/valores4.jpeg",
    text: "Promovemos a aprendizagem contínua e ajudamos as pessoas a desenvolver habilidades tecnológicas relevantes.",
  },
];

const Valores = () => {
  return (
    <Container id="valores" className="valores-container">
      <Col>
        <h2>Nossos Valores:</h2>
        <Row style={{ justifyContent: "center" }}>
          {cards.map((card, i) => (
            <CardBT key={i} img={card.img} text={card.text} />
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default Valores;
