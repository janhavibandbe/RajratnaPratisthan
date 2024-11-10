import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col } from 'react-bootstrap';
import MeetTheTeam from '../components/MeetTheTeam';
import Testimonials from '../components/Success';
import { motion } from 'framer-motion';
import foundation from '../images/First.jpg';


const InfoSection = styled.div`
  background-color: #fcece6;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 993px){
      padding: 0.5rem;
  }

  h2 {
    font-weight: 700;
    color: #d35400;
    font-size: 2.5rem;

    @media(max-width: 993px){
      font-size: 2rem;
    }
    @media(max-width: 500px){
      font-size: 1.7rem;
    }
  }
  p {
    color: #6c757d;
    font-size: 1.1rem;
    line-height: 1.8;

    @media(max-width: 993px){
      font-size: 0.9rem;
      line-height: 1.5;
    }
    @media(max-width: 500px){
      font-size: 0.8rem;

    }
  }
  span {
    font-weight: 700;
    color: #d35400;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const AboutUs = () => {
  
  
  return (
    <AboutMainDiv>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.8 }}
    >
    <Container>
      <Row className="py-5">
        <Col md={6}>
          <ImageWrapper>
            <img src={foundation} alt="Foundation" />
          </ImageWrapper>
        </Col>
        <Col md={6}>
          <InfoSection>
          
            <h2>About the Foundation</h2>
            <p>
              <span>Rajratna</span> aims to give hope to every person experiencing 
              <span> mental </span> <span>issues.</span>
            </p>
            <p>
            Founded in 2015, the Rajratna Foundation is an NGO operating in the Konkan region of Maharashtra. Initially, its small membership focused on providing uniforms, books, and stationery to underprivileged students and supporting marginalized communities. The foundation also undertakes disaster management, women empowerment, public health initiatives, river rejuvenation, environmental conservation, and funeral rites for unclaimed bodies.
            </p>
            <p>
            In 2017, the foundation expanded its mission to care for homeless and mentally ill individuals, treating 192 people and admitting them to regional mental hospitals. To date, 54 have recovered and returned home. The foundation remains committed to providing healthcare and rehabilitation for such individuals.
            </p>
          </InfoSection>
        </Col>
      </Row>
    
    
      <section className="meet-the-team-section">
        <MeetTheTeam/>
      </section>
      {/* testimonials  */}
      <section className="testimonials-section py-0">
        <Testimonials/>
      </section>
      
    </Container>
    </motion.div>
    </AboutMainDiv>
  );
};

const AboutMainDiv = styled.div`
  background-color: #f4f4f9;
`;

export default AboutUs;
