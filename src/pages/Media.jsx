import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import News from '../components/News';
import WomensDay from '../images/WomensDay.png';
import GudhiPadwa from '../images/GudhiPadwa.png';
import Pulwama from '../images/Pulwama.jpg';
import Waghrat from '../images/Waghrat.jpg';
import Cleanliness from '../images/Cleanliness.jpg';
import Covid19 from '../images/covid19.jpg';

import { Container, Row, Col, Card } from 'react-bootstrap';

const SectionWrapper = styled.div`
  background-color: #f4f4f9;
  padding: 50px 0;
`;


const CardGridWrapper = styled.div`
  .card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }

  .card img {
    height: 200px;
    object-fit: cover;
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-size: 20px;
    font-weight: bold;

    @media(max-width: 768px){
      font-size: 16px;
    }
    @media(max-width: 500px){
      font-size: 14px;
    }
  }

  .card-text {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
  text-align: left;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 3px solid #e67e22;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const ReadMoreButton = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d35400;
  }
  
  @media(max-width: 768px){
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
  }
  @media(max-width: 500px){
    font-size: 12px;
  }
`;

const MediaCentre = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const events = [
    {
      id: 1,
      title: `Women's Day`,
      date: 'March 15, 2023',
      description: 'A brief description for ...',
      imageUrl: WomensDay,
    },
    {
      id: 2,
      title: 'Gudhipadwa',
      date: 'August 1, 2023',
      description: 'A brief description for 2023...',
      imageUrl: GudhiPadwa,
    },
    {
      id: 3,
      title: 'Valor Remembered',
      date: 'February 14, 2019',
      description: 'A brief description for 2019...',
      imageUrl: Pulwama,
    },
    {
      id: 4,
      title: 'School meet',
      date: 'January 19, 2023',
      description: 'A brief description for 2023...',
      imageUrl: Waghrat,
    },
    {
      id: 5,
      title: 'Cleanliness Campaign',
      date: 'March 21, 2022',
      description: 'A brief description for 2023...',
      imageUrl: Cleanliness,
    },
    {
      id: 6,
      title: 'COVID-19 vaccination camp',
      date: 'July 26, 2022',
      description: 'A brief description for 2023...',
      imageUrl: Covid19,
    },
  ];

  return (

    <SectionWrapper>
      <Container>

        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        >
        <SectionTitle>Workshops & Events</SectionTitle>
        <CardGridWrapper>
          <Row>
            {events.map((event, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={event.imageUrl} alt={event.title} />
                  <Card.Body>
                    <Card.Title className='card-title'>{event.title}</Card.Title>
                    <Card.Text>{event.text}</Card.Text>
                    <a href={`/event/${event.id}`}>
                      <ReadMoreButton>Read More</ReadMoreButton>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGridWrapper>
        </motion.div>

        {/* Section Title for News Articles */}
        <SectionTitle style={{ marginTop: '50px' }}>News Articles</SectionTitle>
        <News />

      </Container>
    </SectionWrapper>
  );
};

export default MediaCentre;
