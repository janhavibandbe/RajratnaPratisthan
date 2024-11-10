import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import WomensDay from '../images/WomensDay.png';
import GudhiPadwa from '../images/GudhiPadwa.png';



// Styled Grid Container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  padding: 2rem;
  background-color: #fff;

  @media(max-width: 550px){
    grid-template-columns: repeat(1,1fr);
    padding: 1rem;
    padding-top: 1rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  height: 300px;
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 500px){
      height: 200px;
  }
`;


const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Images = () => {
  const images = [
    WomensDay,
    GudhiPadwa,
    WomensDay,
    GudhiPadwa,
    WomensDay,
    GudhiPadwa,
    WomensDay,
    GudhiPadwa,
    WomensDay
  ];

  return (
    <GridContainer>
      {images.map((image, index) => (
        <ScrollRevealImage key={index} image={image} delay={index * 0.2} />
      ))}
    </GridContainer>
  );
};

const ScrollRevealImage = ({ image, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: '-50px 0px' }); // Trigger every time

  return (
    <ImageWrapper
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={imageVariants}
      transition={{ duration: 0.8, delay }}
    >
      <img src={image} alt="Our Work" />
    </ImageWrapper>
  );
};

export default Images;
