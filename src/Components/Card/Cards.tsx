import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <div>
      {[
        props.color,        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", background: "#343a40" }}
          className="mb-2"
        >
          <Card.Header>Allow USER</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Total de USER </Card.Title>
            <Card.Text>
              Cuenta el total de usuarios en el Sistema
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;