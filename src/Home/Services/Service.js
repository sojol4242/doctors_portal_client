import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({data}) => {
    const {name,img,des}=data
    return (
    
     <>
    <Card className="service_content">
    <Card.Img className="service_img" variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {des}
      </Card.Text>
    </Card.Body>
    
  </Card>
 
     </>
    
  
      
    );
};

export default Service;