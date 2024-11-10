import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  color: #36454f;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 987px) {
    height: 180px;
    padding: 10px;
  }
`;

const Icon = styled.i`
  color: #82b440;
  font-size: 30px;
`;

const Title = styled.h5`
  font-size: 1.8rem;

  @media (max-width: 987px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;

  @media (max-width: 987px) {
    font-size: 0.9rem;
  }
`;

const CardComponent = ({ title, text, icon }) => {
  return (
    <CardContainer>
      <Icon className={`fas ${icon}`} />
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CardContainer>
  );
};

export default CardComponent;
