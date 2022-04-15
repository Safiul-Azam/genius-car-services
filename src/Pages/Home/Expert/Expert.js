import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img} = expert
    return (
        <Col>
        <CardGroup>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </CardGroup>
        </Col>
    );
};

export default Expert;