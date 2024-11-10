import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Footer() {
    
    const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-top">

        <div className="section1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTma8_DY2YQ_2fmTom9iY7861kwN9OI5qTihg&s" alt="" />
            <div className='logo-title'>Rajratna</div>
            <div className='logo-title'>Pratisthan</div>
            <div className="social-icons">
                <a href={import.meta.env.VITE_REACT_APP_FACEBOOK_LINK} target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href={import.meta.env.VITE_REACT_APP_INSTAGRAM_LINK} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href={import.meta.env.VITE_REACT_APP_YOUTUBE_LINK} target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>

        <div className="section2">
            <div className="footer-title">
                Call Us
            </div>

            <div className="footer-content">
                <div className="contact-line footer-phone1">
                    <a href={`tel:${import.meta.env.VITE_REACT_APP_PRIMARY_PHONE_NO}`}><i className='fas fa-phone'></i> {import.meta.env.VITE_REACT_APP_PRIMARY_PHONE_NO} &nbsp; (Shri. Rupesh Sawant)</a>
                </div>
                <div className="contact-line footer-phone2">
                    <a href={`tel:${import.meta.env.VITE_REACT_APP_SECONDARY_PHONE_NO}`}><i className='fas fa-phone'></i> {import.meta.env.VITE_REACT_APP_SECONDARY_PHONE_NO} &nbsp; (Shri. Satish Rane)</a>
                </div>
                <div className="contact-line footer-phone3">
                    <a href={`tel:${import.meta.env.VITE_REACT_APP_THIRD_PHONE_NO}`}><i className='fas fa-phone'></i> {import.meta.env.VITE_REACT_APP_THIRD_PHONE_NO} &nbsp; (Shri. Umesh Desai)</a>
                </div>
                <div className="contact-line footer-phone4">
                    <a href={`tel:${import.meta.env.VITE_REACT_APP_FOURTH_PHONE_NO}`}><i className='fas fa-phone'></i> {import.meta.env.VITE_REACT_APP_FOURTH_PHONE_NO} &nbsp; (Shri. Santosh Sawant)</a>
                </div>
            </div>
        </div>

        <div className="section5">
            <div className="footer-title">
                Quick links
            </div>

            <div className="footer-content">
                <div className='footer-link' onClick={() => {window.location.href ='/about-us'}}>About Us</div>
                <div className='footer-link' onClick={() => {window.location.href ='/contact'}}>Contact Us</div>
                <div className='footer-link' onClick={() => {window.location.href ='/gallery'}}>Gallery</div>
                <div className='footer-link' onClick={() => {window.location.href ='/donate'}}>Donate</div>
            </div>
        </div>

        <div className="section4">
            <div className="footer-title">
                Get In Touch
            </div>
            <div className="footer-content">
                <div className="contact-line footer-email1">
                    <a href={`mailto:${import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}`}><i className='fas fa-envelope'></i> {import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}</a>
                </div>
                <div className="contact-line footer-email2">
                    <a href={`mailto:${import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}`}><i className='fas fa-envelope'></i> {import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}</a>
                </div>
                <div className="contact-line footer-location1">
                    <a href={import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_MAP_LINK} target='_blank'><i className='fas fa-map-marker-alt'></i> {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE1} <br/> {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE2}</a>
                </div>
            </div>
        </div>

        <div className="section3">
            <div className="footer-title">
                Quick links
            </div>

            <div className="footer-content">
                <div className='footer-link' onClick={() => {window.location.href ='/about-us'}}>About Us</div>
                <div className='footer-link' onClick={() => {window.location.href ='/contact'}}>Contact Us</div>
                <div className='footer-link' onClick={() => {window.location.href ='/gallery'}}>Gallery</div>
                <div className='footer-link' onClick={() => {window.location.href ='/donate'}}>Donate</div>
            </div>
        </div>

        <div className="section6">
            <div className="footer-title">
                Get In Touch
            </div>
            <div className="footer-content">
                <div className="contact-line footer-email1">
                    <a href={`mailto:${import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}`}><i className='fas fa-envelope'></i> {import.meta.env.VITE_REACT_APP_PRIMARY_EMAIL_ADDRESS}</a>
                </div>
                <div className="contact-line footer-email2">
                    <a href={`mailto:${import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}`}><i className='fas fa-envelope'></i> {import.meta.env.VITE_REACT_APP_SECONDARY_EMAIL_ADDRESS}</a>
                </div>
                <div className="contact-line footer-location1">
                    <a href={import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_MAP_LINK} target='_blank'><i className='fas fa-map-marker-alt'></i> {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE1} <br/> {import.meta.env.VITE_REACT_APP_OFFICE_ADDRESS_LINE2}</a>
                </div>
            </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {currentYear} Rajratna Pratisthan
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
background-color: #1d184f;

    .footer-top{
      width: 100%;
      display: grid;
      grid-template-columns: 15% 33% 33% 19%;
      padding: 1rem;
      padding-inline: 4rem;

      @media(max-width: 1024px){
        padding-inline: 2rem;
      }
      @media(max-width: 930px){
        grid-template-columns: 40% 60%;
        gap: 2rem;
      }
      @media(max-width: 768px){
        grid-template-columns: 30% 70%;
      }
      @media(max-width: 425px){
        grid-template-columns: 28% 72%;
      }
    

      .section1{
        display: flex;
        flex-direction: column;

        img{
            width: 4rem;
            height: 4rem;

            @media(max-width: 600px){
                width: 3rem;
                height: 3rem;
            }
            
            @media(max-width: 425px){
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        .logo-title{
            color: #fff;
            font-size: 1.2rem;
            font-weight: bolder;

            @media(max-width: 1024px){
                font-size: 1rem;
            }
            @media(max-width: 600px){
                font-size: 0.9rem;
            }
            @media(max-width: 425px){
                font-size: 0.8rem;
                line-height: 1.2;
            }
        }

        .tagline{
            color: #ccc;

            @media(max-width: 1024px){
                font-size: 0.9rem;
            }
            @media(max-width: 600px){
                font-size: 0.8rem;
            }
            @media(max-width: 425px){
                font-size: 0.7rem;
                line-height: 1.2;
            }
        }

        .social-icons{
            display: flex;
            gap: 1rem;
            margin-top: 0.5rem;

            i{
                font-size: 1.5rem;
                color: #aaa;
                transition: 0.2s ease-in-out;
                cursor: pointer;

                &:hover{
                  color: #fff;
                  transition: 0.2s ease-in-out;
                }

                @media(max-width: 1024px){
                    font-size: 1.4rem;
                }
                @media(max-width: 425px){
                    font-size: 1.2rem;
                }
            }
        }
      }

      .section2{

        .footer-title{
            display: flex;
        }

        .footer-content{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

            @media(max-width: 600px){
                gap: 0;
            }
            
        }

        .footer-content a{
            color: #ccc;
            text-decoration: none;
            underline: none;
            transition: 0.2s ease-in-out;
        }

        .footer-content a:hover{
            color: #fff;
            transition: 0.2s ease-in-out;
        }

        .footer-content i{
            margin-right: 1rem;

            @media(max-width: 600px){
                margin-right: 0.3rem;
            }
        }
      }

      .section3{
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(max-width: 930px){
            align-items: flex-start;
            display: none;
        }

        .footer-content .footer-link{
            color: #ccc;
            cursor: pointer;
            transition: 0.2s ease-in-out;
        }

        .footer-content .footer-link:hover{
            color: #fff;
            transition: 0.2s ease-in-out;
        }
      }

      .section4{
        @media(max-width: 930px){
            display: none;
        }
        
        .footer-title{
            display: flex;
        }

        .footer-content{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

            @media(max-width: 600px){
                gap: 0;
            }
        }

        .footer-content a{
            color: #ccc;
            text-decoration: none;
            underline: none;
            transition: 0.2s ease-in-out;
            overflow: hidden;
        }

        .footer-content a:hover{
            color: #fff;
            transition: 0.2s ease-in-out;
        }

        .footer-content i{
            margin-right: 1rem;

            @media(max-width: 600px){
                margin-right: 0.3rem;
            }
        }
      }

      .section5{
        display: none;

        @media(max-width: 930px){
            display: block;
        }

        .footer-content .footer-link{
            color: #ccc;
            cursor: pointer;
            transition: 0.2s ease-in-out;
        }

        .footer-content .footer-link:hover{
            color: #fff;
            transition: 0.2s ease-in-out;
        }
      }

      .section6{
        display: none;

        @media(max-width: 930px){
            display: block;
        }

        .footer-title{
            display: flex;
        }

        .footer-content{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

            @media(max-width: 600px){
                gap: 0;
            }
        }

        .footer-content a{
            color: #ccc;
            text-decoration: none;
            underline: none;
            transition: 0.2s ease-in-out;
            overflow: hidden;

            @media(max-width: 768px){
            }
        }

        .footer-content a:hover{
            color: #fff;
            transition: 0.2s ease-in-out;
        }

        .footer-content i{
            margin-right: 1rem;

            @media(max-width: 600px){
                margin-right: 0.3rem;
            }
        }
      }
    }

    .footer-title{
        color: #fff;
        font-size: 1.5rem;
        font-weight: bolder;
        margin-bottom: 0.5rem;

        @media(max-width: 1024px){
            font-size: 1.2rem;
        }
        @media(max-width: 600px){
            font-size: 1rem;
        }
        @media(max-width: 425px){
            font-size: 0.9rem;
        }
    }

    .footer-content{
        color: #ccc;

        @media(max-width: 1024px){
            font-size: 0.9rem;
        }
        @media(max-width: 600px){
            font-size: 0.8rem;
        }
        @media(max-width: 425px){
            font-size: 0.7rem;
        }
    }


    .footer-bottom{
      width: 100%;
      padding: 0.8rem;
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
      color: #fff;

      @media(max-width: 1024px){
        font-size: 1rem;
      }
      @media(max-width: 600px){
        font-size: 0.9rem;
        padding: 0.4rem;
      }
      @media(max-width: 425px){
        font-size: 0.8rem;
      }
    }
`;

export default Footer