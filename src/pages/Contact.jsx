import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

  const [sname, setSname] = useState('');
  const [ssubject, setSsubject] = useState('');
  const [semailid, setSemailid] = useState('');
  const [smessage, setSmessage] = useState('');
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    if(sname==='' || ssubject==='' || semailid==='' || smessage===''){
      toast.error("Please fill all required fields!", {autoClose: 2000});
      return;
    }
    else{
      emailjs
      .sendForm(import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Email Sent 🙂');
          setTimeout(()=>{
            window.location.reload();
          }, 2000);
        },
        (error) => {
          toast.error('Something Went Wrong ☹️');
        },
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  return (
    <ContactPage>
      <motion.div className="header"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <p>CONTACT</p>
      </motion.div>

      <motion.div className="contactpage"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="map-email">
          <div className="map">
            <iframe src={import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_EMBED_MAP_LINK} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form ref={form} onSubmit={sendEmail} className="email">
            <input name="name" type="text" placeholder='Name' onChange={(e) => setSname(e.target.value)}/>
            <input name="subject" type="text" placeholder='Subject' onChange={(e) => setSsubject(e.target.value)}/>
            <input name="emailid" type="text" placeholder='Email ID' onChange={(e) => setSemailid(e.target.value)}/>
            <textarea name="message" id="" placeholder='Write here...' onChange={(e) => setSmessage(e.target.value)}></textarea>
            <div className="send-button">
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>

        <motion.div className="contact-info"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
          <div className="mobile-info">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>   
            </div>  
            <div className="contact-info-title">
              Phone Number
            </div>
            <div className="description">
              <a href={`tel:${import.meta.env.VITE_REACT_APP_PRIMARY_PHONE_NO}`}>{import.meta.env.VITE_REACT_APP_PRIMARY_PHONE_NO} &nbsp; (Shri. Rupesh Sawant)</a>
              <a href={`tel:${import.meta.env.VITE_REACT_APP_SECONDARY_PHONE_NO}`}>{import.meta.env.VITE_REACT_APP_SECONDARY_PHONE_NO} &nbsp; (Shri. Satish Rane)</a>
              <a href={`tel:${import.meta.env.VITE_REACT_APP_THIRD_PHONE_NO}`}>{import.meta.env.VITE_REACT_APP_THIRD_PHONE_NO} &nbsp; (Shri. Umesh Desai)</a>
              <a href={`tel:${import.meta.env.VITE_REACT_APP_FOURTH_PHONE_NO}`}>{import.meta.env.VITE_REACT_APP_FOURTH_PHONE_NO} &nbsp; (Shri. Santosh Sawant)</a>
            </div>
          </div>

          <div className="email-info">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-info-title">
              Email Address
            </div>
            <div className="description">
              <a href={`mailto:${import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}`}>{import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}</a>
              <a href={`mailto:${import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}`}>{import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}</a>
            </div>
          </div>
          
          <div className="address-info">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact-info-title">
              Office Address
            </div>
            <div className="description">
              {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE1}&nbsp;
              {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE2}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ContactPage>
  )
}

const ContactPage = styled.div`
    background-color: #f4f4f9;
.header{
    display: flex;
    justify-content: center;
    padding-top: 2rem;
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

.contactpage{
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 3rem;
    @media (max-width: 768px){
      padding-top: 0.5rem;
    }
    @media (max-width: 425px){
      padding-top: 0.2rem;
    }
}
.map-email{
    display: flex;
    justify-content: center;
    gap: 2rem;
    @media (max-width: 850px) {
      gap: 1.2rem;
    }
    @media (max-width: 786px) {
      flex-direction: column;
      padding-inline: 7rem;
    }
    @media (max-width: 700px) {
      padding-inline: 4rem;
    }
     @media (max-width: 500px) {
      gap: 0.4rem;
    }
    @media (max-width: 425px) {
      padding-inline: 2.5rem;
    }
}
.map-email .map{
    background-color: #ccc;
    width: 35rem;
    height: 27rem;
    @media (max-width: 1170px) {
      width: 30rem;
      height: 22rem;
    }
    @media (max-width: 1024px) {
      width: 25rem;
    }
    @media (max-width: 850px) {
      width: 22rem;
      height: 17rem;
    }
    @media (max-width: 786px) {
      height: 22rem;
      width: 100%;
    }
    @media (max-width: 700px) {
      height: 17rem;
    }
}
.map-email .map iframe{
    height: 100%;
    width: 100%;
}
.map-email .email{
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    width: 35rem;
    gap: 0.5rem;
    @media (max-width: 1170px) {
      width: 30rem;
    }
    @media (max-width: 1024px) {
      width: 25rem;
    }
    @media (max-width: 850px) {
      width: 22rem;
      gap: 0.2rem;
    }
    @media (max-width: 786px) {
      width: 100%;
    }
}
.map-email .email input{
    height: 2.7rem;
    font-size: 1rem;
    font-weight: 500;
    padding-inline: 0.5rem;
    border: 0.1rem solid #f06c40;
    border-radius: 0.4rem;
    @media (max-width: 1170px) {
      height: 2.2rem;
    }
    @media (max-width: 850px) {
      height: 1.8rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
    @media (max-width: 786px) {
      height: 2.2rem;
    }
    @media (max-width: 700px) {
      height: 1.8rem;
      border: 0.05rem solid #f06c40;
    }
}
input:focus {
    outline: none;
  }
.map-email .email input:hover{
    border: 0.2rem solid #f06c40;
    @media (max-width: 700px) {
      border: 0.1rem solid #f06c40;
    }
}
.map-email .email textarea{
    height: 13rem;
    font-size: 1rem;
    font-weight: 500;
    padding-inline: 0.5rem;
    border: 0.1rem solid #f06c40;
    border-radius: 0.4rem;
    resize: none;
    @media (max-width: 1170px) {
      height: 10rem;
    }
    @media (max-width: 850px) {
      height: 8rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
    @media (max-width: 700px) {
      border: 0.05rem solid #f06c40;
    }
}
textarea:focus {
    outline: none;
  }
.map-email .email textarea:hover{
    border: 0.2rem solid #f06c40;
    @media (max-width: 700px) {
      border: 0.1rem solid #f06c40;
    }
}
.map-email .email .send-button{
    margin-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.map-email .email .send-button button{
    width: 15rem;
    height: 3rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 400;
    background-color: #f06c40;
    color: #fff;
    transition: ease-in-out 0.2s;
    @media (max-width: 1170px) {
      height: 2.2rem;
      width: 12rem;
    }
    @media (max-width: 850px) {
      height: 2rem;
      width: 8rem;
    }
    @media (max-width: 786px) {
      height: 2.2rem;
      width: 12rem;
    }
    @media (max-width: 500px) {
      height: 2rem;
      width: 8rem;
      font-size: 1rem;
    }
}
.map-email .email .send-button button:hover{
    transform: scale(0.95);
    transition: ease-in-out 0.2s;
}

.contact-info{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 3rem;
    padding-inline: 5rem;
    justify-items: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 850px) {
    }
    @media (max-width: 930px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 500px) {
      gap: 0.3rem;
    }
}
.contact-info .mobile-info, 
.contact-info .email-info, 
.contact-info .address-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1rem solid #f06c40;
    box-shadow: 1px 5px 10px #ccc;
    border-radius: 0.5rem;
    padding: 0.7rem;
    width: 20rem;
    height: 12rem;
    gap: 0.5rem;
    transition: 0.1s ease-in-out;

    @media (max-width: 1024px) {
      width: 18rem;
      height: 9.5rem;
    }
    @media (max-width: 700px) {
      padding: 0.4rem;
      width: 18rem;
      height: auto;
      gap: 0.2rem;
    }
    @media (max-width: 500px) {
      height: auto;
    }
}

.contact-info .email-info, 
.contact-info .address-info{

  @media(max-width: 930px){
    height: auto;
  }
}

.contact-info .mobile-info:hover, 
.contact-info .email-info:hover, 
.contact-info .address-info:hover{
    transform: scale(1.05);
    transition: 0.1s ease-in-out;
}
.contact-info .icon{
    width: 100%;
    display: flex;
    justify-content: center;
}
.contact-info .mobile-info i, 
.contact-info .email-info i, 
.contact-info .address-info i{
    font-size: 2rem;
    color: rgb(4, 34, 83);
    @media (max-width: 1024px) {
      font-size: 1.3rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
    }
}
.contact-info-title{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: rgb(4, 34, 83);
    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
    @media (max-width: 500px) {
      font-size: 0.7rem;
    }
}
.contact-info .description{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    color: rgb(4, 34, 83);
    @media (max-width: 1024px) {
      font-size: 0.7rem;
    }
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
    
}
.contact-info .description a{
    text-decoration: none;
    color: rgb(4, 34, 83);
}
`;

export default Contact