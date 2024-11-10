import React from 'react';
import { motion } from 'framer-motion';
import DocumentBox from '../components/DocumentBox';
import styled from 'styled-components';

import img1 from '../images/ChangemakerAward2022.jpg';
import img2 from '../images/KokanGawravPuraskar.jpg';
import img3 from '../images/ParkarHospitalSanmanptra.jpg';
import maher from '../images/Maher.jpg';
import pulwama from '../images/Pulwama.jpg';
import womenDay from '../images/WomensDay.png';
import registration from '../images/RegistrationCertificate2.jpeg';
import manorugna22 from '../images/manorugna-22.jpg';
import manorugna23 from '../images/manorugna-23.jpg';
import manorugna24 from '../images/manorugna-24.jpg';

const Documents = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  }; 
  
  let data = [
    {
      id: 1,
      image: registration,
      content: 'Registration Certificate',
      link: 'https://drive.google.com/file/d/1rV9I027I-8nsL-CBhfpxz5hV9KVhLVBy/view?usp=drive_link'
    },
    {
      id: 2,
      image: img1,
      content: 'Mahasanskruti Sanman 2022',
      link: 'https://drive.google.com/file/d/1QuKqqN_M0iFMFP_itHVbzV19z1nnKc0v/view?usp=drive_link'
    },
    {
      id: 3,
      image: img2,
      content: 'Kokan Gavrav Purskar 2022',
      link: 'https://drive.google.com/file/d/1hkhKzbiEkubt57UwcB9jNPnTKw0LkASM/view?usp=drive_link'
    },
    {
      id: 4,
      image: img3,
      content: 'Parkar Hospital and Marathi Patrakar Parishad Sanmanpatra',
      link: 'https://drive.google.com/file/d/1XjP-IlDofVhmE0zBiTDiGFddkMB-g8B3/view?usp=drive_link'
    },
    {
      id: 5,
      image: pulwama,
      content: 'Pulwama Shradhanjali',
      link: 'https://drive.google.com/file/d/1dA09e_TagE1kbJn3hKB24qN8AWXtO2B4/view?usp=drive_link'
    },
    {
      id: 6,
      image: womenDay,
      content: `Women's Day Celebration`,
      link: 'https://drive.google.com/file/d/1aovGfWb90dX1TOw0XCUmaKERLGVWgOcd/view?usp=drive_link'
    },
    {
      id: 7,
      image: maher,
      content: 'Maher Organization',
      link: 'https://drive.google.com/file/d/1TZs79NE6Wz4BvFJU__yPOdjTkn6CcMRl/view?usp=drive_link'
    },
    {
      id: 8,
      image: manorugna22,
      content: 'Manorugna-2022',
      link: 'https://drive.google.com/file/d/1rEhcA2sEeezrRt2PTH-z9ye0P7bddIyx/view?usp=drive_link'
    },
    {
      id: 9,
      image: manorugna23,
      content: 'Manorugna-2023',
      link: 'https://drive.google.com/file/d/1fkC2T5yoEyZw8-JznUGmRo1CM6UJnQjN/view?usp=drive_link'
    },
    {
      id: 10,
      image: manorugna24,
      content: 'Manorugna-2024',
      link: 'https://drive.google.com/file/d/159R4f8QHf0K_06qa74Cp6X8t5553ht0N/view?usp=drive_link'
    }
  ];

  return (
    <DocumentPage>
      <motion.div className="header"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <p>DOCUMENTS</p>
      </motion.div>

      <motion.div className="documents"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {
        data.map((item, index) => {
          return(
              <DocumentBox key={item.id} id={item.id} image={item.image} content={item.content} link={item.link}/>
        )
      })}
      </motion.div>

    </DocumentPage>
  )
}

const DocumentPage = styled.div`
    background-color: #f4f4f9;
    padding-top: 1.5rem;
.header{
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  } 
.header p{
    width: 80%;
    display: flex;
    justify-content: left;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    border-bottom: 3px solid #e67e22;
    @media (max-width: 1400px){
      width: 90%;
    }
    @media (max-width: 1024px){
      width: 80%;
    }
    @media (max-width: 768px){
      font-size: 1.7rem;
    }
    @media (max-width: 500px){
      font-size: 1.5rem;
    }
  } 
  .documents{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-item: center;
    padding-top: 1rem;
    padding-bottom: 3rem;
    padding-inline: 10rem;
    gap: 1rem;
    @media (max-width: 1400px){
      padding-inline: 5rem;
    }
    @media (max-width: 1220px){
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 1024px){
      padding-inline: 7rem;
    }
    @media (max-width: 768px){
      grid-template-columns: repeat(3, 1fr);
      padding-inline: 5rem;
    }
    @media (max-width: 600px){
      grid-template-columns: repeat(2, 1fr);
      padding-inline: 3rem;
    }
    @media (max-width: 400px){
      grid-template-columns: repeat(2, 1fr);
      padding-inline: 2rem;
    }
  } 
`;

export default Documents