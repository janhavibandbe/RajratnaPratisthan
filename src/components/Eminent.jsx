import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import first from '../images/First.jpg';
import two from '../images/Two.jpg';



const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin: 40px 0;  

  .carousel {
    width: 60%;  
    max-width: 600px; 
    min-width: 300px; 
  }

  .carousel-indicators {
    display: none;
  }

  .carousel-caption-custom {
    text-align: center;
    margin-top: 15px;
    font-size: 16px;
    color: #333;
  }

  .carousel-item img {
    width: 100%; 
    height: 300px; 
    object-fit: cover; 
    transition: transform 0.6s ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .rotate-180 {
    transform: rotateY(270deg);  
  }
`;

const CaptionWrapper = styled.div`
  text-align: center;
  margin-top: 15px; 
  
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;

    @media(max-width: 768px){
      font-size: 16px;
    }
    @media(max-width: 500px){
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    color: #555;

    @media(max-width: 768px){
      font-size: 12px;
    }
    @media(max-width: 500px){
      font-size: 11px;
    }
  }
`;

const EminentPersonalities = () => {
  const [rotating, setRotating] = useState(false);

  const handleSlide = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 600); 
  };

  const personalities = [
    {
      id: 1,
      name: 'Shri.Uday Samant ',
      description: 'Short description of personality.',
      imageUrl: first,
    },
    {
      id: 2,
      name: 'Personality 2',
      description: 'Short description of personality 2.',
      imageUrl: two,
    },
  
  ];

  return (
    <CarouselWrapper>
      <Carousel
        interval={3000} 
        onSlide={handleSlide} 
      >
        {personalities.map((personality) => (
          <Carousel.Item key={personality.id}>
            <img
              className={`d-block ${rotating ? 'rotate-180' : ''}`}
              src={personality.imageUrl}
              alt={personality.name}
            />
           
            <CaptionWrapper>
              <h3>{personality.name}</h3>
              <p>{personality.description}</p>
            </CaptionWrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default EminentPersonalities;
