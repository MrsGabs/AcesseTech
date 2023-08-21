import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function TextareaBT() {
  return (
    <>

      <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
        <Form.Control 
          as="textarea"
          style={{ height: '100px',resize:"none" }}
        />
      </FloatingLabel>
    </>
  );
}

export default TextareaBT;