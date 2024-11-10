import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WomensDay from '../images/WomensDay.png';
import GudhiPadwa from '../images/GudhiPadwa.png';
import icon1 from '../images/Icon1.png';
import icon2 from '../images/Icon2.png';
import icon3 from '../images/Icon3.png';
import icon4 from '../images/Icon4.png';
import QRSection from '../components/QRSection';


// Keyframes for sliding letters in
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },  
};


const PageWrapper = styled.div`
  position: relative;
  min-height: 120vh;
  background-color: #f4f4f9;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 50px;
`;

const InfoSection = styled(motion.section)`
  padding: 40px 20px;
  background-color: #f4f4f9;
  text-align: center;
`;

const InfoTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #d35400;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;



const Letter = styled.span`
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  color: #d35400;
  opacity: 0;
  animation: ${(props) => (props.from === 'left' ? slideInLeft : slideInRight)} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const InfoContent = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  @media(max-width: 768px){
    font-size: 1rem;
  }
  @media(max-width: 500px){
    font-size: 0.8rem;
  }
`;


const CarouselImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;

  @media(max-width: 1024px){
    height: 400px;
  }
  @media(max-width: 768px){
    height: 350px;
  }
  @media (max-width: 500px){
    height: 300px;
  }
  @media (max-width: 375px){
    height: 250px;
  }
`;

const GreenSection = styled(motion.section)`
  background-color: #f4f4f9;
  padding: 60px 0 12px;
  position: relative;
  text-align: center;
  padding-bottom: 200px;
  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const GreenTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 60px;
  }
`;
const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  justify-items: center;
  align-items: center;
  margin-top: -75px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 20px;
    margin-top: -30px;
    padding-top: 1rem;
  }
`;

const IconContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  width: 250px;
  height: auto;
  position: relative;
  top: 75px;
  border: 0.2rem solid #f06c40;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    top: 0;
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    &:hover {
    transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    padding: 15px;
  }

  i{
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const IconImage = styled.img`
  width: 60px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 50px;
  }
  @media (max-width: 480px) {
    width: 40px;
  }
`;

const IconTitle = styled.h3`
  font-size: 1.2rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconText = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DonatePage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const renderAnimatedText = (text) => {
    return text.split('').map((letter, index) => {
      if (letter === ' ') {
        return <span key={index} style={{ marginRight: '10px' }}>&nbsp;</span>;
      }
      return (
        <Letter
          key={index}
          from={index % 2 === 0 ? 'left' : 'right'}
          delay={isAnimating ? index * 0.1 : 0}
          style={{ opacity: isAnimating ? 1 : 0 }}
        >
          {letter}
        </Letter>
      );
    });
  };

  return (
    <PageWrapper>

      {/* Information Section */}
      <InfoSection
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setIsAnimating(true)}
        onViewportLeave={() => setIsAnimating(false)}
      >
        <InfoTitle>{renderAnimatedText("Support Us")}</InfoTitle>

        <InfoContent
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
        >
          Mental health is a critical aspect of human dignity, yet many mentally challenged individuals are left wandering the streets, isolated, and without access to the care they need. They face numerous 
          challenges—rejection, neglect, and a lack of proper support. Your contribution can help provide these individuals with the medical attention, shelter, and compassion they deserve.

By supporting our cause, you can be a part of a movement that offers them a chance to live with dignity and security. Join hands with us to give hope, care, and a brighter future to those who need it most. Together, we can transform their lives from hardship to healing!
        </InfoContent>

        <InfoContent
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
        >
         
          Join hands with us to ensure a happy and safe life for all!
        </InfoContent>
      </InfoSection>

      <QRSection/>

      {/* Green Section */}
      <GreenSection
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <GreenTitle>{renderAnimatedText(" A Journey of Hope")}</GreenTitle>

        <IconGrid>
          <IconContainer>
            <IconImage src={icon1} alt="Icon 1" />
            <IconTitle>Rescue, Care, and Transformation</IconTitle>
            <IconText>Encapsulates the full process of rescuing, caring for, and transforming </IconText>
          </IconContainer>

          <IconContainer>
            <IconImage src={icon2}  alt="Icon 2" />
            <IconTitle>Healthcare</IconTitle>
            <IconText>Ensure good health for every mentally challenged person.</IconText>
          </IconContainer>

          <IconContainer>
            <IconImage src={icon3}  alt="Icon 3" />
            <IconTitle>Providing Shelter and Hope</IconTitle>
            <IconText>Focuses on the offering a safe space and emotional support.</IconText>
          </IconContainer>

          <IconContainer>
            <IconImage src={icon4}  alt="Icon 4" />
            <IconTitle>From Streets to Safe Havens</IconTitle>
            <IconText>Focuses on the transition from a life on the streets to secure and supported living.</IconText>
          </IconContainer>
        </IconGrid>
      </GreenSection>
    </PageWrapper>
  );
};

export default DonatePage;
