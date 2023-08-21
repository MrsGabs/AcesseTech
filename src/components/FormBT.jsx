import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import TextareaBT from "./TextareaBT";
import '../styles/components/Form.css'

function FormsBT() {
  return (
    <div className="contato-container pb-5" id="contato">
      <Container>
        <Col>
          <h2>Contato</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Seu Melhor Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Seu Cometario</Form.Label>
              <TextareaBT></TextareaBT>
            </Form.Group>

            <Button
              style={{ width: "100%" }}
              className="mt-3"
              variant="info"
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
}

export default FormsBT;
