import React from "react";
import styled from "styled-components";
import CardComponent from "../components/CardComponent.jsx";
import { EventServices } from "../constants/index.js";
import CarouselComponent from "../components/CarouselComponent.jsx";
import useOnScreen from "../components/useOnScreen.jsx";
import ContactForm from "../components/ContactForm.jsx";
import img2 from '../images/image2.jpg';


const Involve = styled.div`
  background-color: #f4f4f9;
  padding-inline: 5.5rem;
  margin-bottom: -2rem;
  padding-bottom: 2rem;

  @media (max-width: 1310px){
    padding-inline: 2rem;
  }
  @media (max-width: 768px){
  padding-inline: 0.5rem;
  }
`;

const GetInvolvedPara = styled.div`
  .bg-main{
    margin-top: 1rem;

    p{
      padding-block: 1rem;

      @media(max-width: 500px){
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }

  img{
    height: 20rem;
    object-fit: cover;

    @media (max-width: 1310px){
      height: 22rem;
    }
    @media (max-width: 1024px){
      height: 24rem;
    }
    @media (max-width: 768px){
      height: 20rem;
    }
    @media (max-width: 500px){
      height: 13rem;
    }
  }
`;

const FadeInDiv = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  position: relative;
  z-index: 1;
  overflow: visible;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
  padding-top: 2.3rem;
  border-bottom: 3px solid #e67e22;

  h1 {
    position: relative;
    color: #333;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      transform: translateY(10px);
      animation: slideUp 1s ease-in-out forwards;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const StyledDivision = styled.div`
  background-color: #82b440;
  color: white;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  @media(max-width: 768px){
    margin-bottom: 0.5rem;
  }
`;

const StyledDivision2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: relative;
  z-index: 0;

  .section2Container{
    padding-top: 1.3rem;
    background-color: #e5e7eb;
    padding-bottom: 1.3rem;

    @media(max-width: 1000px){
      padding-bottom: 0.3rem;
    }
  }

  h3{
    width: 100%;
    display: flex;
    justify-content: left;
    text-align: center;
    position: relative;
    color: #333;
    padding-top: 2.3rem;
    margin-inline: 2rem;
    border-bottom: 3px solid #e67e22;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  .eventsLi{
    display: flex;
    align-items: center;
  }

  ul{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media(max-width: 768px){
      gap: 0;
      font-size: 0.9rem;
    }
  }
`;

const GetInvolved = () => {
  const [setRef1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [setRef2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [setRef3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [setRef4, isVisible4] = useOnScreen({ threshold: 0.1 });
  const [setRef6, isVisible6] = useOnScreen({ threshold: 0.1 });

  return (
    <Involve>
      <FadeInDiv ref={setRef1} isVisible={isVisible1}>
        <StyledDiv>
          <h1>Get Involved</h1>
        </StyledDiv>
      </FadeInDiv>

      <FadeInDiv ref={setRef2} isVisible={isVisible2}>
        <GetInvolvedPara>
          <div className="bg-main bg-color hero-section">
            <div className="container-fluid">
              <div className="row mb-5">
                <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                  <h3 className="text-capitalize fw-bolder">
                    The best way to find yourself is to lose yourself in the
                    service of others
                  </h3>
                  <p className="para-width text-light-grey">
                    Volunteering is a powerful way to make a positive impact on
                    both the community and oneself. By dedicating time and skills
                    to help others, volunteers not only address social issues but
                    also foster personal growth. The act of volunteering brings a
                    sense of fulfillment and purpose, as it allows individuals to
                    connect with diverse groups, develop new skills, and build
                    meaningful relationships. Whether it's through community
                    service, environmental conservation, or supporting vulnerable
                    populations, volunteering enriches lives and strengthens
                    communities, creating a ripple effect of kindness and
                    compassion.
                  </p>
                </div>

                <div className="col-12 col-md-12 col-lg-6">
                  <div className="text-center text-lg-end">
                    <img
                      src={img2}
                      height={350}
                      width={530}
                      alt="help"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GetInvolvedPara>
      </FadeInDiv>

      <FadeInDiv ref={setRef3} isVisible={isVisible3}>
        <StyledDivision>
          <div className="container mt-5">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-12 col-sm-6 col-md-4 mb-4">
                <CardComponent
                  className="custom-card"
                  title="Helping Each Other"
                  text="We support each other to create a better community."
                  icon="fa-hands-helping"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-4">
                <CardComponent
                  className="custom-card"
                  title="Protecting Lives"
                  text="We prioritize safety and well-being."
                  icon="fa-shield-alt"
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-4">
                <CardComponent
                  className="custom-card"
                  title="Nurturing Growth"
                  text="We nurture talents and foster development."
                  icon="fa-seedling"
                />
              </div>
            </div>
          </div>
        </StyledDivision>
      </FadeInDiv>

      <FadeInDiv ref={setRef4} isVisible={isVisible4}>

        <StyledDivision2 className="">
          <h3 className="eventHeader mb-4">Our Events</h3>

          <div className="section2Container container-fluid">
            <div className="section2InnerContainer row">
              <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                <CarouselComponent />
              </div>

              <div className="col-12 col-md-12 col-lg-6 d-flex flexColCenter pt-2">
                <div className="eventsLi relative">
                  <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    {EventServices.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </StyledDivision2>
      </FadeInDiv>

      <FadeInDiv ref={setRef6} isVisible={isVisible6}>
        <div>
          <ContactForm />
        </div>
      </FadeInDiv>
    </Involve>
  );
};

export default GetInvolved;
