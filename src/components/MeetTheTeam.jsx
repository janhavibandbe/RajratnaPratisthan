import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import person1 from '../images/person1.jpeg';
import person2 from '../images/person2.jpeg';
import person3 from '../images/person3.jpeg';
import person4 from '../images/person4.jpeg';
import person5 from '../images/person5.jpeg';
import person6 from '../images/person6.jpeg';
import person7 from '../images/Member7.jpeg';
import person8 from '../images/Member8.jpeg';

const InfoSection = styled.div`
  text-align: center;
  margin-top: 15px;
  h3 {
    font-size: 1.5rem;
    color: #333;

    @media(max-width: 768px){
      font-size: 1rem;
    }
  }
  p {
    color: #777;
    font-size: 1rem;
    margin-top: 0.5rem;

    @media(max-width: 768px){
      font-size: 0.8rem;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media(max-width: 576px){
    padding-inline: 0rem;
  }
  @media(max-width: 500px){
    height: 200px;
  }
  @media(max-width: 400px){
    padding-inline: 0rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #333;
  text-align: left;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 10px;
  border-bottom: 2px solid #d35400; 

  &::after {
    content: '';
    width: 0px;
    height: 4px;
    background-color: #2c3e50;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  @media(max-width: 768px){
      font-size: 2.5rem;
  }
  @media (max-width: 500px){
      font-size: 2rem;
  }
  @media (max-width: 425px){
    font-size: 1.5rem;
  }
`;

const teamMembers = [
  { name: 'Rupesh Sawant', image: person3, designation: 'President' },
  { name: 'Satish Rane', image: person2, designation: 'Vice President' },
  { name: 'Umesh Desai', image: person5, designation: 'Secretary' },
  { name: 'Sandip Tambe', image: person8, designation: 'Joint Secretary' },
  { name: 'Santosh Sawant', image: person1, designation: 'Treasurer' },
  { name: 'Sunil Dhanawade', image: person4, designation: 'Co-Treasurer' },
  { name: 'Rahi Sawant', image: person7, designation: 'Committee Member' },
  { name: 'Siddhesh Dhulap', image: person6, designation: 'Member' }
];

const MeetTheTeam = () => {
  return (
    <Container>
      <SectionTitle>Meet The Team</SectionTitle>

      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
            <ImageWrapper>
              <img src={member.image} alt={member.name} className="img-fluid" />
            </ImageWrapper>
            <InfoSection>
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
            </InfoSection>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeetTheTeam;
