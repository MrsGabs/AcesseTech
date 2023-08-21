import Card from "react-bootstrap/Card";

const CardBT = ({img,text}) => {
  return (
    <Card  style={{ margin:"20px" }}> 
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBT;
