import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ image, name, company, jobdescription }) => {
  return (
    <Card className="m-2" style={{ width: "100%" }}>
      {/* <Card.Img variant="top" src={`${image}`} height={250} /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{company}</Card.Text>
        <Card.Text>{jobdescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
