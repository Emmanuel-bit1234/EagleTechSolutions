
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import React from 'react';
export const Cards = ({title, description , imgUrl})=> {
    return(
      <Col sm={6} md={4} className='card-bxbx'>
      <div className="card-imgbx">
          <img src={imgUrl}/>
          <div className="card-txtx">
    <h4>{title}</h4>
    <span>{description}</span>
  </div>
      </div>
  </Col>
    )
}