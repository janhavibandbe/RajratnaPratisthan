import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Counter from "../components/Counter.jsx";
import image3 from '../images/image3.jpg';
import first from '../images/First.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import target from '../images/target.png';
import teamwork from '../images/teamwork.png';
import slideImg1 from '../images/slideimg1.png';
import slideImg2 from '../images/slideimg2.jpg';
import slideImg3 from '../images/slideimg3.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const [curindex, setCurindex] = useState(0);

  const slides = [
    {
      title: "EMPOWERING LIVES",
      description: "Providing mental health support and medical care to those in need",
      image: slideImg1
    },
    {
      title: "SAFE SHELTERS",
      description: "Connecting mentally challenged individuals with orphanages and safe housing options",
      image: slideImg2
    },
    {
      title: "DIGNITY FOR ALL",
      description: "Ensuring every individual receives the respect and care they deserve",
      image: slideImg3
    }
  ];

  // Fixed cards content
  const cards = [
    {
      imgSrc: "/images/One.jpg",
      title: "Streets to Safety",
      description: "Our 'Streets to Safety' initiative focuses on providing immediate shelter for mentally challenged and homeless individuals. We partner with local orphanages and safe housing facilities to ensure that those in need have a secure place to stay. By offering a warm, welcoming environment, we help restore dignity and hope, paving the way for a brighter future",
    },
    {
      imgSrc: "/images/Two.jpg",
      title: "Compassionate Care",
      description: "Our Compassionate Care program delivers essential medical and mental health services to those who often fall through the cracks. Trained professionals offer tailored support, ensuring that every individual receives the attention and treatment they deserve for their unique challenges.",
    },
    {
      imgSrc: "/images/Three.jpg",
      title: "Community Connections",
      description: "The Community Connections program fosters relationships between the NGO and local organizations. By collaborating with schools, businesses, and other nonprofits, we create a network of support that strengthens our outreach efforts and enhances the resources available to those we serve.",
    }
  ];

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurindex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [slides.length]);

  // Manual carousel navigation
  const goToPrevious = () => {
    setCurindex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurindex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <HomePage>

      <Carousel>
        <SlideContainer curindex={curindex}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <BackgroundImage src={slide.image} alt="Background" />
              <Overlay>
                <TextContainer>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </TextContainer>
              </Overlay>
            </Slide>
          ))}
        </SlideContainer>

        <PrevButton onClick={goToPrevious}>❮</PrevButton>
        <NextButton onClick={goToNext}>❯</NextButton>
      </Carousel>

      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      >
      <CardSection>
        <CardContainer>
          {cards.map((card, cardIndex) => (
            <Card key={cardIndex}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </CardContainer>
      </CardSection>
      </motion.div>

      <div className="vissionmission">
          <motion.div 
          className='vision'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          >
            <div className="vision-title"> <h1>Who &nbsp;<span>we are?</span></h1> </div>
            <div className="vission-mission-mid">
              <span className='mid-line'></span>
              <img src={teamwork} alt="" />
              <span className='mid-line'></span>
            </div>
            <div className="vision-text">The Rajratna Foundation was Founded in 2015 and it operates in Maharashtra’s Konkan region, providing support 
              to underprivileged students, marginalized communities, and engaging in various social welfare initiatives like disaster management
               and environmental conservation. Since 2017, it has expanded its mission to care for homeless and mentally ill individuals, 
               offering healthcare and rehabilitation.</div>
          </motion.div>

          <motion.div 
          className='mission'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          >
            <div className="mission-title"> <h1>Our &nbsp;<span>Mission</span></h1> </div>
            <div className="vission-mission-mid">
              <span className='mid-line'></span>
              <img src={target} alt="" />
              <span className='mid-line'></span>
            </div>
            <div className="mission-text">Our mission is to provide comprehensive care and support to individuals in need, ensuring that they 
              receive the treatment necessary for their well-being. We strive to empower each person to return home with the resources and 
              confidence they need to thrive.</div>
          </motion.div>
      </div>

      <div className="midCounter">
        <div className="container">
          <div className="row">
            <div className="col-4 text-center mb-3">
              <h2 className="counter-number">
                <Counter target={192} />
              </h2>
              <p>People Helped</p>
            </div>
            <div className="col-4 text-center mb-3">
              <h2 className="counter-number">
                <Counter target={100} />
              </h2>
              <p>Projects</p>
            </div>
            <div className="col-4 text-center mb-3">
              <h2 className="counter-number">
                <Counter target={54} />
              </h2>
              <p>Patients Treated</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
      className="mid3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      >
        <div className="mid3-top">
          <div className="title">OUR WORK</div>
        </div>

        <div className="mid3-bottom">
          <div className="mid3-cards">

            <div className="mid3-card">
              <h2 className='card-title'>Helping Hands</h2>
              <div className="card-desc-right">April 22, 2022</div>
              <div className='card-desc'>
                A member of the Rajratna Foundation noticed an elderly person wandering the streets of Ratnagiri for the past eight to ten days.The foundation immediately provide him with a meal, and then handed them over to the Maher institution in Khedshi.
              </div>
            </div>

            <div className="mid3-card">
              <h2 className='card-title'>Compassionate Care</h2>
              <div className="card-desc-right">March 23, 2023</div>
              <div className='card-desc'>
              On March 23, 2023, a woman was brought to Kalamboshi from Chiplun. As she had no one to take care of her, she was facing difficulties with food and shelter. The Rajratna Foundation stepped in and admitted this woman to the Maher Sanstha Nivli in Ratnagiri.
              </div>
            </div>

            <div className="mid3-card">
              <h2 className='card-title'>Caring Outreach</h2>
              <div className="card-desc-right">June 16, 2022</div>
              <div className='card-desc'>
                On June 16, 2022, the Rajratna Foundation extended a helping hand to a homeless woman in Gayalwadi, Ratnagiri.
                With the cooperation of the Rajratna Foundation and the police, the homeless woman was admitted to the Maher Sanstha Nivli in Ratnagiri.
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      <motion.div 
      className="feedback"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      >
        <div className="header">
            PAT ON THE BACK
        </div>
        <Swiper
        spaceBetween={50}
        loop={true}   
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
        className='custom-swiper'
      >
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>Their initiative to care for homeless individuals is inspiring. The team at Rajratna Foundation is doing incredible work for society's most vulnerable.</p>
          <div className="reviwer">
            - Mrs. Swapnali Teli
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>Rajratna Foundation’s compassionate work in mental health care has brought hope and healing to so many struggling families. Their unwavering dedication is truly remarkable and inspiring.</p>
            <div className="reviwer">
            - Mrs. Spruha Athaley
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>Incredible work by Rajratna Foundation! Their dedication to mental health care and helping the homeless is truly inspiring. A blessing to the community.</p>
          <div className="reviwer">
            - Ms. Khushee Ayare
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>The support of Rajratn Pratisthan for mentally ill individuals is heartfelt and essential. The foundation has changed lives, and I’m grateful for their efforts.</p>
          <div className="reviwer">
            - Ms. Janhavi Bandbe
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>The foundation not only helps those in need but also educates and empowers communities. Their approach to public health and women empowerment is outstanding.</p>
          <div className="reviwer">
            - Ms. Prachi Desai
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i className="fa-solid fa-quote-left"></i>
          <p>From providing essentials to students to supporting mental health, Rajratna Foundation is always there when people need them most. Truly inspirational!</p>
          <div className="reviwer">
            - Ms. Vishakha Gothankar
          </div>
        </SwiperSlide>
      </Swiper>
      </motion.div>
    </HomePage>
  )
}

const Carousel = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;

  @media(max-width: 768px){
    height: 60vh;
  }
  @media(max-width: 425px){
    height: 40vh;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform: ${({ curindex }) => `translateX(-${curindex * 100}%)`};
  transition: transform 0.6s ease-in-out;
  will-change: transform;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 80%;

  h1 {
    font-size: 3rem;
    font-weight: bold;

    @media(max-width: 1024px){
      font-size: 2.6rem
    }
    @media(max-width: 768px){
      font-size: 2.1rem;
    }
    @media(max-width: 550px){
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;

    @media(max-width: 1024px){
      font-size: 1.2rem
    }
    @media(max-width: 768px){
      font-size: 1rem;
    }
    @media(max-width: 550px){
      font-size: 0.9rem;
    }
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 2rem;

  @media(max-width: 768px){
      font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 2rem;

   @media(max-width: 768px){
      font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const CardSection = styled.div`
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: -7rem;

  @media (max-width: 850px) {
    position: relative;
    margin-top: 0px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 10px;
  z-index: 10;

  @media(max-width: 1024px){
    width: 90%;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    width: 30rem;
  }
  @media(max-width: 550px){
    width: 100%;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
  border: 0.2rem solid #f06c40;

  @media(max-width: 1024px){
    padding: 10px;
  }
  @media(max-width: 550px){
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    color: #000; 
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bolder;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 1rem;
    color: #333; 

    @media(max-width: 1024px){
      font-size: 0.9rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 850px) {
    width: 80%;
    margin-bottom: 20px;
  }
  @media (max-width: 550px) {
    width: 95%;
    margin-bottom: 5px;
    &:hover {
      transform: scale(1.02);
    }
  }
`;


const HomePage = styled.div`
.midCounter{
  background-color: #f06c40;
  color: white;
  padding-top: 1.5rem;
  h2{
    font-size: 2rem;
    font-weight: 600; 
  }
  p{
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media(max-width: 1024px){
    h2{
      font-size: 1.7rem;
    }
    p{
      font-size: 1.1rem;
    }
  }
  @media(max-width: 786px){
    h2{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
  @media(max-width: 500px){
    h2{
      font-size: 1.3rem;
    }
    p{
      font-size: 0.8rem;
    }
  }
}


.mid3{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.mid3-top{
  display: flex;
  flex-direction: column;
  width: 80%;

  @media(max-width: 900px){
      width: 90%;
  }
}
.mid3-top .title{
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  border-bottom: 0.2rem solid #f06c40;

  @media(max-width: 768px){
      font-size: 2rem;
  }
  @media(max-width: 600px){
      font-size: 1.9rem;
  }
  @media(max-width: 425px){
      font-size: 1.7rem;
  }
}

.mid3-bottom{
  width: 100%;
  display: flex;
  justify-content: center;
}
.mid3-bottom .mid3-cards{
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding-top: 0.5rem;
  padding-bottom: 2rem;

  @media(max-width: 900px){
      width: 90%;
  }
  @media(max-width: 900px){
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      width: 80%;
  }
  @media(max-width: 900px){
      width: 90%;
  }
}

.mid3-card{
  background-color: #1d184f;
  padding: 1rem;
  width: 30%;
  height: 20rem;
  transition: 0.2s ease-in-out;
  border-radius: 0.7rem;
  @media(max-width: 1300px){
      height: 25rem;
  }
  @media(max-width: 900px){
      width: 60%;
      height: 13rem;
  }
  @media(max-width: 600px){
      width: 80%;
  }
  @media(max-width: 425px){
      width: 95%;
  }
}
.mid3-card img{
  width: 100%;
  height: 15rem;
  object-fit: cover;
  margin-top: 1rem;

  @media(max-width: 768px){
      height: 12rem;
  }
  @media(max-width: 425px){
      height: 10rem;
  }
}

.mid3-card .card-title{
  color: #f06c40;
  margin-bottom: 0.5rem;
  font-weight: bolder;

  @media(max-width: 1024px){
      font-size: 1.5rem;
  }
  @media(max-width: 900px){
      font-size: 1.2rem;
  }
}
.mid3-card .card-desc{
  color: #ccc;
  @media(max-width: 1024px){
      font-size: 0.9rem;
  }
  @media(max-width: 768px){
      font-size: 0.8rem;
  }
  @media(max-width: 500px){
      font-size: 0.8rem;
  }
}

.mid3-card .card-desc-right{
  color: #ccc;
  text-align: right;
  padding-right: 1rem;
  font-size: 0.8rem;
  @media(max-width: 768px){
      font-size: 0.7rem;
  }
  @media(max-width: 500px){
      font-size: 0.6rem;
  }
}




.feedback {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;

    @media (max-width: 1240px){
    }
    @media (max-width: 1024px){
        width: 90%;
    }
    @media (max-width: 650px){
        width: 70%;
    }
    @media (max-width: 450px){
        width: 80%;
    }
  }

  .feedback .header{
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    border-bottom: 0.2rem solid #f06c40;

    @media(max-width: 768px){
        font-size: 2rem;
    }
    @media(max-width: 600px){
        font-size: 1.9rem;
    }
    @media(max-width: 425px){
        font-size: 1.7rem;
    }
  }
  
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background-color: #f06c40;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .swiper-slide:hover {
    transform: scale(1.05);
  }
  
  .swiper-slide i.fa-quote-left {
    display: flex;
    justify-content: left;
    width: 100%;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 1rem;
    
    @media (max-width: 1024px){
        font-size: 2.5rem;
    }
    @media (max-width: 768px){
        font-size: 2rem;
    }
    @media (max-width: 450px){
        font-size: 1.8rem;
    }
  }
  
  .swiper-slide p {
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.5;
    
    @media (max-width: 1024px){
        font-size: 1.1rem;
    }
    @media (max-width: 768px){
        font-size: 1rem;
    }
    @media (max-width: 450px){
        font-size: 0.9rem;
    }
  }
  
  .swiper-slide .reviwer{
    width: 100%;
    display: flex;
    justify-content: right;
    font-size: 1.2rem;
    color: #fff;
    @media (max-width: 1024px){
        font-size: 1.1rem;
    }
    @media (max-width: 768px){
        font-size: 1rem;
    }
    @media (max-width: 450px){
        font-size: 0.9rem;
    }
  }




  .vissionmission{
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 2rem;

    .vision, .mission{
      width: 70%;

      @media(max-width: 768px){
        width: 90%;
      }

    }

    .vision-title h1, .mission-title h1{
      font-size: 3rem;
      font-weight: bolder;
      color: #000;
      display: flex;
      justify-content: center;

      @media(max-width: 1024px){
        font-size: 2.5rem;
      }
      @media(max-width: 768px){
        font-size: 2.1rem;
      }
      @media(max-width: 550px){
        font-size: 1.8rem;
      }
    }

    .vision-title span, .mission-title span{
      color: #f06c40;
    }

    .vision-text, .mission-text{
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;
      text-align: center;

      @media(max-width: 1024px){
        font-size: 1rem;
      }
      @media(max-width: 550px){
        font-size: 0.9rem;
        padding-bottom: 1.5rem;
      }
    }

    .vission-mission-mid{

      display: flex;
      justify-content: center;
      align-items: center;

      span{
        background-color: #f06c40;
        height: 0.2rem;
        width: 5rem;
        margin-inline: 1rem;

        @media(max-width: 768px){
          width: 3rem;
          height: 0.15rem;
        }
      }

      img{
        width: 3rem;
        height: 3rem;

        @media(max-width: 768px){
          width: 2rem;
          height: 2rem;
        }
      }

    }
  }
`;
export default Home