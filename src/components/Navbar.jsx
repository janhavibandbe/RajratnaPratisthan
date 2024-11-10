import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [navActive, setNavActive] = useState(window.innerWidth > 1100);

  const setActiveTab = (id) => {
    const tabs = document.querySelectorAll('.nav-box');
  
    tabs.forEach(tab => {
      tab.classList.remove('tab-active');
    });
  
    const activeTab = document.getElementById(id);
    activeTab.classList.add('tab-active');
  };

  const toggleNavbar = () => {
    if(navActive){
        setNavActive(false);
    }else{
        setNavActive(true);
    }
  };

  const goToHome = () => {
    window.location.href ='/';
    setActiveTab('home');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToOurWork = () => {
    window.location.href ='/ourwork';
    setActiveTab('ourwork');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToResourceCenter = () => {
    window.location.href ='/resource';
    setActiveTab('resourcecenter');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToMediaCenter = () => {
    window.location.href ='/media';
    setActiveTab('mediacenter');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToGallery = () => {
    window.location.href ='/gallery';
    setActiveTab('gallery');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToAbout = () => {
    window.location.href ='/about-us';
    setActiveTab('about');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToGetInvolved = () => {
    window.location.href ='/get-involved';
    setActiveTab('getinvolved');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToContact = () => {
    window.location.href ='/contact';
    setActiveTab('contact');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };
  const goToDonate = () => {
    window.location.href ='/donate';
    setActiveTab('useless');
    if(window.innerWidth < 1100){
      setNavActive(false);
    }
  };


  return (
    <Nav>

      <div className="useless" id='useless'></div>

        <div className="header">
            <div className="logo" onClick={goToHome}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTma8_DY2YQ_2fmTom9iY7861kwN9OI5qTihg&s" alt="" />
                <div className='logo-title'>
                    <div>RAJRATNA</div>
                    <div>PRATISTHAN</div>
                </div>
            </div>

            {
                navActive &&
                <div className="links">
                    <ul className="ul" id="ul">
                        <li className='li nav-box' id='home' onClick={goToHome}>Home</li>
                        <li className='li nav-box' id='ourwork' onClick={goToOurWork}>Our<span> Work</span></li>
                        <li className='li nav-box' id='resourcecenter' onClick={goToResourceCenter}>Resource<span> Center</span></li>
                        <li className='li nav-box' id='mediacenter' onClick={goToMediaCenter}>Media<span> Center</span></li>
                        <li className='li nav-box' id='gallery' onClick={goToGallery}>Gallery</li>
                        <li className='li nav-box' id='about' onClick={goToAbout}>About<span> Us</span></li>
                        <li className='li nav-box' id='getinvolved' onClick={goToGetInvolved}>Get<span> Involed</span></li>
                        <li className='li nav-box' id='contact' onClick={goToContact}>Contact<span> Us</span></li>
                        <li className="li donate-button" onClick={goToDonate}>Donate</li>
                    </ul>
                </div>
            }
            

            <div id="menu-btn" className="fa fa-bars" onClick={toggleNavbar}></div>
        </div>
    </Nav>
  )
}

const Nav = styled.div`
  top: 0;
  width: 100%;
  border-bottom: 0.2rem solid #f06c40;
  background-color: #1d184f;
  padding-block: 0.5rem;
  padding-inline: 1rem;

  .header{
    display: flex;
  }

  .logo{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 15%;
    cursor: pointer;
  }

  .logo img{
    width: 50px;
    height: 50px;

    @media(max-width: 550px){
        width: 30px;
        height: 30px;
    }
  }

  .logo .logo-title{
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
      font-size: 1rem;
    }
    @media(max-width: 550px){
      font-size: 0.8rem;
    }
  }

  .links{
    width: 80%;
  }

  .links .ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media(max-width: 1100px){
        background-color: rgba(0,0,0,0.9);
        flex-direction: column;
        position: absolute;
        justify-content: center;
        height: 20rem;
        width: 90%;
        right: 2rem;
        color: black;
        z-index: 10;
        top: 4rem;
        gap: 0.5rem;
    }
    @media(max-width: 768px){
        right: 1rem;
    }
    @media(max-width: 500px){
        right: 0.5rem;
    }
  }

  .li{
    color: white;
    text-decoration: none;
    list-style: none;
    font-size: 1.2rem;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    @media(max-width: 1400px){
      font-size: 1rem;
    }
  }

  .li:hover{
    color: #f06c40;
    transition: 0.2s ease-in-out;
  }

  .donate-button {
    background-color: #f06c40;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .donate-button:hover {
    background-color: white;
    color: #f06c40;
  }

  #menu-btn{
    position: absolute;
    right: 2rem;
    top: 1rem;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    cursor: pointer;
    color: white;
    display: none;

    @media(max-width: 1100px){
        display: inline-block;
    }
    @media(max-width: 768px){
        font-size: 1.5rem;
    }
  }


  .tab-active{
    color: #f06c40;
  }
`;

export default Navbar
