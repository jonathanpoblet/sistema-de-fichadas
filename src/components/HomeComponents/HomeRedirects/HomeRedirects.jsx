import React from 'react';
import { cards } from './cards.js';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import './homeRedirects.css';

export default function HomeRedirects() {
  const navigate = useNavigate();

  return (
    <article className='row'>
      {cards.map((card, index) => (
        <div
          className='col-xl-3 col-lg-6 col-md-6 col-sm-12 mt-4'
          key={index}
          onClick={() => navigate(card.href)}
        >
          <Card className={`${card.bg} ${card.color} home-redirects-card`}>
            <Card.Body>
              <Card.Title className='fw-bold'>{card.title}</Card.Title>
              <Card.Text>{card.subtitle}</Card.Text>
            </Card.Body>
            <div className='icon text-white-50'>
              <i className={card.icon}></i>
            </div>
            <Card.Footer>
              <Button variant='link' className='w-100 home-redirects-card-button text-white px-0'>
                {card.text} <i className='fa fa-arrow-circle-right'></i>
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </article>
  );
}
