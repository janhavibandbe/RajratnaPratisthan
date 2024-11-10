import React, { useRef } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import success1 from '../images/Success1.jpg';
import success2 from '../images/Success2.jpg';

const QuoteSection = styled.div`
  background-color: #d5ede0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 300px;
  overflow-y: auto;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    font-style: italic;
    color: #2c3e50;
    margin: 0;

    @media(max-width: 768px){
      font-size: 1rem;
    }
    @media(max-width: 435px){
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }

  h5 {
    font-size: 1.1rem;
    margin-top: 1rem;
    font-weight: bold;
    color: #2c3e50;
  }

  span {
    font-size: 1rem;
    color: #7f8c8d;
  }

  .quote-mark {
    font-size: 3rem;
    color: #2c3e50;
    margin-top: 2px;
  }
`;

const StyledButton = styled.button`
  background-color: #d5ede0;
  border: none;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b2e0d0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  max-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;


const StyledHeading = styled.h2`
  font-size: 3rem; 
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #4f9e99; 
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 10px;

  @media(max-width: 993px){
    font-size: 2.5rem; 
  }
  @media(max-width: 500px){
    font-size: 2rem; 
  }
  @media(max-width: 400px){
    font-size: 1.5rem; 
  }
  
  &::after {
    content: '';
    width: 0px;
    height: 4px;
    background-color: #2c3e50;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

`;

const TestimonialSlide = ({ quote, image }) => (
  <Row className="align-items-stretch" style={{ height: '300px' }}>
    <Col md={6} sm={6} xs={12} className="d-flex">
      <QuoteSection className="quote-section">
        <p>{quote}</p>
      </QuoteSection>
    </Col>
    <Col md={6} sm={6} xs={12} className="d-flex">
      <ImageWrapper>
        <img src={image} alt="Testimonial" />
      </ImageWrapper>
    </Col>
  </Row>
);

const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    
    
    {
      info: "Rajratna Pratisthan admitted its 181st female mental health patient for treatment at the hospital from Rajapur, Uple, Ratnagiri on 30/12/23.For several days, a female mental health patient had been causing a disturbance in Rajapur, going into temples and mosques, vandalizing items there, and harassing staff in government offices. She was seen wandering in the market with a stick, demanding money forcibly from customers visiting the market. When this matter was reported to Rajapur Police by Mr. P.N. Veer, the Rajratna Pratisthan team promptly went to Rajapur, took the woman into custody, provided medical assistance, and admitted her to Ratnagiri Hospital for further treatment late in the evening.During this time, the President of Rajratna Pratisthan, Mr. Rupesh Sawant, Vice President Mr. Satish Rane, Treasurer Mr. Santosh Sawant, and members Mrs. Anagha Akerkar, Mrs. Rahi Sawant, along with Rajapur Police Inspector Mr. Bharat Dhumal and Mr. P.N. Veer, and female officers Mrs. Chavan and Mrs. Namye, provided significant assistance.",
      image: success1
    },
    {
      info: "Rajratna Pratisthan admitted its 193rd female mental health patient for treatment at the hospital from Jaygad, Ratnagiri on 30/8/24.Information was received by Rajratna Pratisthan that a female mental health patient was wandering in the village at night, crying out loudly. The organization took her into custody, provided medical assistance, and admitted her to the Ratnagiri Mental Hospital for further treatment.To facilitate the admission, the President of the Pratishthan, Mr. Rupesh Sawant, Treasurer Mr. Santosh Sawant, along with Police Officer Mr. Milind Kadam from the Jaygad police station and local residents of Jaygad, assisted in admitting the female patient for treatment.",
      image: success2
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, 
    beforeChange: (current, next) => {
      
      const quoteSections = document.querySelectorAll('.quote-section');
      if (quoteSections[next]) {
        quoteSections[next].scrollTop = 0;
      }
    },
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container className="pb-5">
      <StyledHeading>Success Stories</StyledHeading>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialSlide 
              quote={testimonial.info}
              image={testimonial.image}
            />
          </div>
        ))}
      </Slider>

      <div className="text-center mt-4">
        <StyledButton className="mx-2" onClick={handlePrev}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Prev
        </StyledButton>
        <StyledButton className="mx-2" onClick={handleNext}>
          Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </StyledButton>
      </div>  
    </Container>
  );
};

export default Testimonials;
