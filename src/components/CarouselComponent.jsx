import React from "react";
import styled from "styled-components";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import img2 from '../images/image2.jpg';
import WomensDay from '../images/WomensDay.png';
import Pulwama from '../images/Pulwama.jpg';

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 530px;
  height: 350px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 5px solid #fff;

  @media (max-width: 768px) {
    max-width: 400px;
    height: 250px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    height: 200px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  z-index: 1;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:focus {
    outline: none;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 2rem;
    height: 2rem;
    background-size: 100%;
  }
`;

const CarouselComponent = () => {
  return (
    <CarouselWrapper
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CarouselImage
            src={img2}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <CarouselImage
            src={Pulwama}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <CarouselImage
            src={WomensDay}
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Carousel Controls */}
      <CarouselButton
        className="carousel-control-prev prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </CarouselButton>
      <CarouselButton
        className="carousel-control-next next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </CarouselButton>
    </CarouselWrapper>
  );
};

export default CarouselComponent;
