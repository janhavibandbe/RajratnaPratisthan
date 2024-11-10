import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

import work1 from '../images/work1.jpg';
import work2 from '../images/Maher.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
import work5 from '../images/work5.jpg';
import work6 from '../images/work6.jpg';

function OurWork() {

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

const works = [
    {
        id: 101,
        title: 'Helping Hands',
        date: 'April 22, 2022',
        description: 'A brief description for ...',
        imageUrl: work1,
    },
    {
        id: 102,
        title: 'A New Beginning',
        date: 'April 30, 2022',
        description: 'A brief description for 2023...',
        imageUrl: work2,
    },
    {
        id: 103,
        title: 'Compassionate Care',
        date: 'March 23, 2023',
        description: 'A brief description for 2019...',
        imageUrl: work3,
    },
    {
        id: 104,
        title: 'Caring Outreach',
        date: 'June 16, 2022',
        description: 'A brief description for 2023...',
        imageUrl: work4,
    },
    {
        id: 105,
        title: 'A Heartwarming Rescue',
        date: 'April 27, 2022',
        description: 'A brief description for 2023...',
        imageUrl: work5,
    },
    {
        id: 106,
        title: 'Streets to Safety',
        date: 'September 22, 2022',
        description: 'A brief description for 2023...',
        imageUrl: work6,
    }
];

  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible">
    <SectionWrapper>
      <Container>
        <SectionTitle>OUR WORK</SectionTitle>
        <CardGridWrapper>
          <Row>
            {works.map((work, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={work.imageUrl} alt={work.title} />
                  <Card.Body>
                    <Card.Title className='card-title'>{work.title}</Card.Title>
                    <Card.Text>{work.text}</Card.Text>
                    <a href={`/event/${work.id}`}>
                      <ReadMoreButton>Read More</ReadMoreButton>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGridWrapper>

      </Container>
    </SectionWrapper>
    </motion.div>
  )
}

const SectionWrapper = styled.div`
   background-color: #f4f4f9;
  padding: 50px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
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

export default OurWork
