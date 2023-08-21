import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5">
      <Container>
        <Row>
          <Col md={6}>
            <h4>AcesseTech</h4>
            <p>
              Transformando vidas através da tecnologia. Conectando possibilidades, transformando futuros.
            </p>
          </Col>
          <Col md={3}>
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/programas">Programas</a></li>
              <li><a href="/voluntariado">Seja um Voluntário</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        © {new Date().getFullYear()} AcesseTech. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
