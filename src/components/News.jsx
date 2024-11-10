import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import news1 from '../images/News1.jpg';
import news2 from '../images/News2.jpg';
import news3 from '../images/News3.jpeg';
import news4 from '../images/News4.jpg';

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-block: 0.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
`;


const ImgModel = styled.div`
  .imgModel{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
}
.imgModel.open{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}
.imgModel img{
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    min-height: 30rem;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
    @media (max-width: 768px) {
      min-height: 20rem;
    } 
    @media (max-width: 425px) {
      min-height: 7rem;
    }
}
.imgModel.open i{
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
}
`;

const ModelImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  min-height: 30rem;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    min-height: 20rem;
  }

  @media (max-width: 425px) {
    min-height: 10rem;
  }
`;

const CloseIcon = styled.i`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

const News = () => {
  const [imgModel, setImgModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const openModel = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setImgModel(true);
  };

  const closeModel = () => {
    setImgModel(false);
    window.location.href ='/media';
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <ImageContainer>
              <NewsImage
                src={news1}
                alt="News 1"
                onClick={() => openModel(news1)}
              />
            </ImageContainer>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <ImageContainer>
              <NewsImage
                src={news2}
                alt="News 2"
                onClick={() => openModel(news2)}
              />
            </ImageContainer>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <ImageContainer>
              <NewsImage
                src={news3}
                alt="News 3"
                onClick={() => openModel(news3)}
              />
            </ImageContainer>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <ImageContainer>
              <NewsImage
                src={news4}
                alt="News 4"
                onClick={() => openModel(news4)}
              />
            </ImageContainer>
          </Col>
        </Row>
      </Container>

      <ImgModel>
        <div className={imgModel ? "imgModel open" : "imgModel"}>
          <img src={tempImgSrc} alt="" />
          <i className="fa-solid fa-x" onClick={() => setImgModel(false)}></i>
        </div>
      </ImgModel>
    </>
  );
};

export default News;
