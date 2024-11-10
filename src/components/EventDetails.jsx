import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import WomensDay from '../images/WomensDay.png';
import GudhiPadwa from '../images/GudhiPadwa.png';
import Pulwama from '../images/Pulwama.jpg';
import Waghrat from '../images/Waghrat.jpg';
import Cleanliness from '../images/Cleanliness.jpg';
import Covid19 from '../images/covid19.jpg';

import work1 from '../images/work1.jpg';
import work2 from '../images/Maher.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
import work5 from '../images/work5.jpg';
import work6 from '../images/work6.jpg';

const events = [
  {
    id: 1,
    title: `Women's Day`,
    date: 'March 08, 2022',
    description: `<strong>Rajratna celebrated Women's Day in a unique way!</strong> <br/> <br/>
                  On the occasion of Women's Day, essential supplies were distributed to the women at the 
                  Anusuya Anand Ashram in Pawas. Just like every year, Rajratna celebrated Women's Day here again this year. <br/> <br/>
                   Rajrtana shares a special bond with Anusuya Ashram. As a result, every year, all the women members celebrate this 
                   day joyfully together, and Rajrtana is always there to support them. The event was
                   marked by distributing essential household items, making the occasion even more meaningful.`,
    imageUrl: WomensDay,
  },
  {
    id: 2,
    title: 'Gudhipadwa',
    date: 'April 2, 2022',
    description: `On the occasion of Gudhi Padwa, a grand Hindu New Year procession was organized from the Maruti Temple to Patit-Pavan Temple.  <br/> <br/>
                  In this procession, the Rajratna Foundation created a live tableau on a chariot depicting the circumstances under which mentally
                   ill patients are admitted for treatment. All the members of the Rajratna Foundation worked very hard to present this 
                   chariot in the procession.`,
    imageUrl: GudhiPadwa,
  },
  {
    id: 3,
    title: 'Valor Remembered',
    date: 'February 14, 2019',
    description: `<strong>Rajratna Pratisthan pays tribute to the brave soldiers of Pulwama attack.</strong> <br/> <br/>
    On the morning of February 14, 2019, cruel and cowardly terrorists attacked a CRPF convoy, detonating a vehicle. 44 of our brave soldiers were martyred in this attack.  <br/> <br/>
    The Rajratna Pratisthan, Ratnagiri, has been conducting a program to pay tribute to these heroes for the past 3 years.
    Government officials, employees, Rajratna Foundation activists, journalists from electronic media, and common citizens enthusiastically participated in this event and expressed gratitude for the sacrifices made by these heroes.
    This program was successfully held at the old Malnaka gymnasium ground.`,
    imageUrl: Pulwama,
  },
  {
    id: 4,
    title: 'School meet',
    date: 'January 19, 2023',
    description: `On January 19, 2023, the Rajratna Foundation organized a visit for students of the 
    Zilla Parishad Primary School, Waghrat, Taluka Lanja, District Ratnagiri, to the newly inaugurated Balasaheb 
    Thakare Tarangan in Ratnagiri. The students were treated to a 45-minute show at the Tarangan, courtesy of the Rajratna Foundation. 
    Refreshments were also provided to the students. <br/> <br/>
    The Rajratna Foundation's President, Shri. Rupesh Sawant, Vice President Shri. Satish Rane, Secretary Shri. Umesh Desai, Member 
    Shri. Hemant Chavan, Women's Member Smt. Aishwarya Gawkar, Smt. Rahi Sawant, and teachers were present during the visit.`,
    imageUrl: Waghrat,
  },
  {
    id: 5,
    title: 'Cleanliness Campaign',
    date: 'March 21, 2022',
    description: `On the occassion of Chhatrapati Shivaji Maharaj Jayanti, Rajratna Pratisthan organized a cleanliness campaign on Ratnadurga Fort. <br/> <br/>
    To commemorate the birth anniversary of Chhatrapati Shivaji Maharaj, the revered deity of Maharashtra, a cleanliness drive
     was conducted at the Ratnadurg Fort (Bhagwati Fort), located near Ratnagiri city. The forts built by Chhatrapati Shivaji Maharaj 
     continue to inspire us today and serve as sources of motivation for future generations. It is our duty as Marathi people to preserve 
     the sanctity of these historical sites by keeping them clean. <br/> <br/>
    The Rajratna Foundation and the Vatsalya Sindhu Seva Bhavi Sanstha collaborated with the police administration to organize this early morning cleanliness drive. The event was attended by the President of the Rajratna Foundation, Shri. Rupesh Sawant, the President of the Vatsalya Sindhu Seva Bhavi Sanstha, Shri. Aniruddh (Chhotu) Khamkar, and other officials and members of both organizations.`,
    imageUrl: Cleanliness,
  },
  {
    id: 6,
    title: 'COVID-19 vaccination camp',
    date: 'July 26, 2022',
    description: `The Rajratna Foundation, Ratnagiri, organized a COVID-19 vaccination camp that received a positive response from the public. <br/> <br/>
    On July 26, 2022, the Rajratna Foundation successfully conducted a vaccination drive offering the first, second, and booster doses. Over 200 citizens received the vaccine. <br/> <br/>
    The Rajratna Foundation played a crucial role in ensuring timely and efficient delivery of COVID-19 booster doses to the public. The camp was organized at Jaish Mangal Park Thibapalace, and 200 citizens participated.
    The Rajratna Foundation's members actively engaged with each participant, inquiring about their health and ensuring a smooth vaccination process. <br/> <br/>
    The camp was made possible thanks to the efforts of the Rajratna Foundation's President, Shri. Rupesh Sawant, Vice President Shri. Satish Rane, Secretary Shri. Umesh Desai, Joint Secretary Shri. Sandeep Tambe, Treasurer Shri. Santosh Sawant, Joint Treasurer Shri. Sunil Dhanavde, Foundation Member Shri. Aniruddh (Chhotu) Khamkar, Shri. Jitendra Jadhav, Shri. Gajanan Aier, Shri. Gaurav Chavan, Shri. Anant Shinde, Shri. Siddhesh Dhulpe, Shri. Sachin Kesarkar, Shri. Bhushan Barve, Shri. Amol Shreenath, Shri. Anil Pawar, Shri. Dilip Nagvekar, Shri. Swapnil Salvi, Shri. Omkar Sinkar, Women's Members Smt. Rahi Sawant, Smt. Manali Rane, Smt. Sharmila Sawant, Smt. Ashwini Rahate, Smt. Sharmila Gangane, Smt. Pushpalata Pawar, Smt. Aditi Shinde, Advocate Smt. Supriya Sawant, and Shri. Omkar Rahate of Jaish Mangal Park.`,
    imageUrl: Covid19,
  },
  {
    id: 101,
    title: 'Helping Hands',
    date: 'April 22, 2022',
    description: `A member of the Rajratna Foundation noticed an elderly person wandering the streets of Ratnagiri for the past eight to ten days. <br/><br/> 
    The elderly person was wearing tattered clothes and carrying a bag filled with papers. They appeared to be starving and had been staying at the ST stand for eight days.
    Upon noticing this, the Rajratna Foundation inquired about the person and discovered that they were homeless. The foundation immediately took the person in, provided them with a meal, and then handed them over to the Maher institution in Khedshi through the police. <br/><br/> 
    The Rajratna Foundation has been diligently working not only for the mentally ill but also for the homeless.
    During this time, the President of the Rajratna Foundation, Shri Rupesh Sawant, Treasurer Shri Santosh Sawant, Member Shri Chhotu Khamkar, Shri Jitendra Jadhav, Smt. Swara Bhosale, and Shri Sandeep Bhosale facilitated the admission of the elderly person to the Maher Seva Bhavi Sanstha.`,
    imageUrl: work1,
  },
  {
    id: 102,
    title: 'A New Beginning',
    date: 'April 30, 2022',
    description: `<strong>The Rajratna Foundation Helped a Homeless Person.</strong>  <br/> <br/>
    The members of the Rajratna Foundation were informed by the public that an unknown person was wandering around the area between Kuvarbav and Hatkhamba in Ratnagiri. Immediately, the foundation's members went to Kuvarbav to take the person under their care. Upon inquiry, it was found that the person was from Solapur and was homeless. With the assistance of the police and citizens, the person was admitted to the Maher institution in Khedshi, Ratnagiri. <br/> <br/>
    The President of the Rajratna Foundation, Shri Rupesh Sawant, and members Shri Chhotu Khamkar and Shri Jitendra Jadhav facilitated the admission of the homeless person to the Maher institution.`,
    imageUrl: work2,
  },
  {
    id: 103,
    title: 'Compassionate Care',
    date: 'March 23, 2023',
    description: `On March 23, 2023, a woman was brought to Kalamboshi from Chiplun. As she had no one to take care of her, she was facing difficulties with food and shelter.  <br/> <br/>
    The Rajratna Foundation stepped in and admitted this woman to the Maher Sanstha Nivli in Ratnagiri.  <br/> <br/>
    The Rajratna Foundation's President, Shri Rupesh Sawant, along with women members Smt. Rahi Sawant, Smt. Kadam Madam, and Shri Kamble Sir from the Maher Sanstha, facilitated the admission of the woman to the institution.`,
    imageUrl: work3,
  },
  {
    id: 104,
    title: 'Caring Outreach',
    date: 'June 16, 2022',
    description: `<strong>The Rajratna Foundation Helped a Homeless Woman</strong> <br/> <br/>
    On June 16, 2022, the Rajratna Foundation extended a helping hand to a homeless woman in Gayalwadi, Ratnagiri. <br/> <br/>
    With the cooperation of the Rajratna Foundation and the police, the homeless woman was admitted to the Maher Sanstha Nivli in Ratnagiri. <br/> <br/>
    The President of the Rajratna Foundation, Shri Rupesh Sawant, Member Shri Jitendra Jadhav, Women's Members Smt. Rahi Sawant and Smt. Kalpana Parit, and Shri Kamble Sir from the Maher Sanstha facilitated the admission of the woman to the institution.`,
    imageUrl: work4,
  },
  {
    id: 105,
    title: 'A Heartwarming Rescue',
    date: 'April 27, 2022',
    description: `For the past month and a half, a member of the Rajratna Foundation noticed an elderly person wandering between Chhatrapati Shivaji Maharaj Stadium and Civil Hospital in Ratnagiri. Upon inquiry, it was found that this person was homeless, with dirty clothes, an unkempt beard, and long hair.  <br/> <br/>
    Immediately, Shri. Rupesh Sawant and Shri. Chhotu Khamkar went to Chhatrapati Shivaji Maharaj Stadium and took the person into their care. They shaved the person, gave them a bath, provided food, and new clothes. As the individual was in good health but homeless, they were admitted to the Maher Institution in Khedshi, Ratnagiri, with the help of the police. <br/> <br/>
    On this occasion, the President of the Rajratna Foundation, Shri. Rupesh Sawant, Vice President Shri. Satish Rane, Treasurer Shri. Santosh Sawant, Members Shri. Aniruddh (Chhotu) Khamkar, Shri. Jitendra Chavan, Shri. Gajanan Aier, and Shri. Madke assisted in admitting the person to the Maher Institution.`,
    imageUrl: work5,
  },
  {
    id: 106,
    title: 'Streets to Safety',
    date: 'September 22, 2022',
    description: `<strong>Rajratna Foundation Rescues and Assists a Mentally Challenged Woman</strong> <br/> <br/>
On September 22, 2022, in Sangameshwar Turul, Ratnagiri, a mentally challenged woman was found wandering in a distressed state. She was approximately 30-32 years old and was wearing dirty clothes with matted hair. She was surviving by begging for food and sleeping in makeshift shelters. <br/> <br/>
Milind Chavan, the President of the Kadwai Turul Auto-Rickshaw Drivers and Owners Association, came across this woman and contacted the Rajratna Foundation. The foundation's members immediately went to Sangameshwar Turul and took the woman into their care. They cleaned her up, cut her matted hair, provided her with new clothes and food.
The members of the Auto-Rickshaw Drivers and Owners Association, including Milind Chavan, Sandeep Chille, Atmaram Mayeker, Rajendra Bhojne, Tushar Kadam, and Shahid Pagar, actively assisted in this rescue operation. <br/> <br/>
With the help of the Rajratna Foundation and the Sangameshwar Police, the woman was given a medical examination and then admitted to the Ratnagiri Mental Hospital for further treatment. <br/> <br/>
The President of the Rajratna Foundation, Shri. Rupesh Sawant, Treasurer Shri. Santosh Sawant, Members Shri. Aniruddh (Chhotu) Khamkar, Shri. Jitendra Jadhav, Shri. Gajanan Aier, and Women Members Smt. Rahi Sawant, Smt. Kalpana Parit, along with the Sangameshwar Police Inspector Shri. Uday Zhavare, Police Constable Shri. Prashant Shinde, and Police Constable Yogita Bargale, played a crucial role in providing assistance to the woman.`,
    imageUrl: work6,
  },
];


const EventDetailsWrapper = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media(max-width: 768px){
      padding: 30px;
  }
  @media(max-width: 500px){
      padding: 20px;
      min-height: 70vh;
  }
`;

const EventTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;

  @media(max-width: 768px){
      font-size: 24px;
      margin-bottom: 16px;
  }
  @media(max-width: 500px){
      font-size: 18px;
      margin-bottom: 10px;
  }
`;

const EventDate = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;

  @media(max-width: 768px){
      font-size: 14px;
      margin-bottom: 20px;
  }
  @media(max-width: 500px){
      font-size: 12px;
      margin-bottom: 15px;
  }
`;

const EventImage = styled.img`
  width: 100%;
  max-width: 800px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 576px) {
    max-height: 200px;
  }
`;

const EventDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;

  @media(max-width: 768px){
      font-size: 14px;
  }
  @media(max-width: 500px){
      font-size: 12px;
  }
`;

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <EventDetailsWrapper>
            <EventImage src={event.imageUrl} alt={event.title} />
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{event.date}</EventDate>
            {/* <EventDescription>{event.description}</EventDescription> */}
            <EventDescription dangerouslySetInnerHTML={{ __html: event.description }} />
          </EventDetailsWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;


