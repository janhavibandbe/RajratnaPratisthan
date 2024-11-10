import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Header = styled.h2`
    width: 100%;
    display: flex;
    justify-content: left;
    text-align: center;
    position: relative;
    color: #333;
    border-bottom: 3px solid #e67e22;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
  }
`;

const FormContainer = styled.div`
  margin-block: 2rem;
  padding-top: 2rem;
  border: none;
  border-radius: 8px;
  background-color: #f4f4f9;

  @media (max-width: 576px) {
    padding: 1rem;
  }

  .form-label{
    font-size: 1.2rem;
    font-weight: 350;

    @media(max-width: 1024px){
      font-size: 1rem;
    }
    @media(max-width: 500px){
      font-size: 0.9rem;
    }
  }

  textarea{
    resize: none;
  }
 
`;

const SubmitButton = styled.button`
  background-color: #f06c40;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    contact: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const { fullName, age, contact, email, message } = formData;
    if(fullName==='' || age==='' || contact==='' || email==='' || message===''){
      toast.error("Please fill all required fields!", {autoClose: 2000});
      return;
    }
    else{
      emailjs
      .sendForm(import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAILJS_VOLUNTEER_TEMPLATE_ID, form.current, {
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

  return (
    <FormContainer>
      <Header>Volunteer With Us</Header>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center">
          <SubmitButton type="submit">Submit</SubmitButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
