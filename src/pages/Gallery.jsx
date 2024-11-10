import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image7.jpg';
import img5 from '../images/image5.jpg';
import img6 from '../images/SchoolMeet.jpg';
import img7 from '../images/First.jpg';
import img8 from '../images/Success1.jpg';
import img9 from '../images/Maher.jpg';
import img10 from '../images/Pulwama.jpg';
import img11 from '../images/Success2.jpg';
import img12 from '../images/covid19.jpg';
import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';
import video4 from '../images/video4.mp4';
import video5 from '../images/video5.mp4';
import video6 from '../images/video6.mp4';

const Gallery = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  let photos = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    }
  ]
  
  const [imgModel, setImgModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setImgModel(true);
  }
  return (

    <GalleryPage>
      <div className="gallery">
      <motion.div className="section-name"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <h1>PHOTO GALLERY</h1>
      </motion.div>

        <div className={imgModel ? "imgModel open" : "imgModel"}>
          <img src={tempimgSrc} alt="" />
          <i className="fa-solid fa-x" onClick={() => setImgModel(false)}></i>
        </div>

        <motion.div className="photoGallery"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
          {photos.map((item, index) => {
            return(
              <div className="pics" key={index}>
              <img src={item.imgSrc} alt="" onClick={() => {setImgModel(true)
                setTempImgSrc(item.imgSrc)
              }}/>
            </div>
            )
          })}
        </motion.div>
        
        <motion.div className="section-name"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
          <h1>VIDEO GALLERY</h1>
        </motion.div>

        <motion.div className="videoGallery"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
          <div className="pics">
            <video src={video1} controls loop muted></video>
          </div>

          <div className="pics">
            <video src={video3} controls loop muted></video>
          </div>

          <div className="pics">
            <video src={video5} controls loop muted></video>
          </div>

          <div className="pics">
            <video src={video2} controls loop muted></video>
          </div>

          <div className="pics">
            <video src={video4} controls loop muted></video>
          </div>
          {/* {videos.map((item, index) => {
            return(
              <div className="pics" key={index}>
                {item.videoSrc}
              </div>
            )
          })} */}

            <div className="pics">
              <iframe width="" height="" src="https://www.youtube.com/embed/gUp0FdXHfws?si=tHcDLFPdcKOyfmN9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="pics">
              <iframe width="" height="" src="https://www.youtube.com/embed/XNAltc93SD8?si=OheuxdVpzRwSKrtx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="pics">
              <iframe width="" height="" src="https://www.youtube.com/embed/i1-or-iRREk?si=A7IsrZb1VvgheYUk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="pics">
              <iframe width="" height="" src="https://www.youtube.com/embed/qWHEXnnXmvg?si=oW4jyov040XPZ8hn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            </div>
            
            <div className="pics">
              <video src={video6} controls loop muted></video>
            </div>
          
         </motion.div>
      </div>
    </GalleryPage>
  )
}
const GalleryPage = styled.div`
    background-color: #f4f4f9;

.header{
    display: flex;
    justify-content: center;
    padding-top: 1rem;
} 
.header p{
    width: 80%;
    display: flex;
    justify-content: left;
    font-size: 2.7rem;
    font-weight: 500;
    color: rgb(4, 34, 83);
    border-bottom: 0.2rem solid #f06c40;
    @media (max-width: 1400px){
      width: 90%;
    }
    @media (max-width: 1024px){
      width: 80%;
    }
    @media (max-width: 768px){
      font-size: 2.5rem;
    }
    @media (max-width: 500px){
      font-size: 2rem;
    }
    @media (max-width: 425px){
      font-size: 1.5rem;
    }
  } 

.gallery{
    padding-top: 1rem;
    padding-bottom: 3rem;
    padding-inline: 10rem;
    @media (max-width: 1400px){
      padding-inline: 5rem;
    }
    @media (max-width: 1024px){
      padding-inline: 7rem;
    }
    @media (max-width: 768px){
      padding-inline: 1rem;
    }
   @media (max-width: 425px){
      padding-inline: 0.3rem;
    }
}
.gallery .section-name{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 2rem;
    color: #333;
}
.gallery .section-name h1{
  width: 100%;
  border-bottom: 0.2rem solid #f06c40;
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    border-bottom: 3px solid #e67e22;
    @media (max-width: 768px){
      font-size: 1.7rem;
    }
    @media (max-width: 500px){
      font-size: 1.5rem;
    }
}

.photoGallery, .videoGallery{
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
    }
}

.videoGallery{
  @media (max-width: 500px) {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
    }
}

.pics{
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
}
.pics:hover{
    filter: opacity(0.8);
}
.pics img, video{
    width: 100%;
    border-radius: 1rem;
}

.pics iframe{
  height: 15rem;
  width: 100%;
  @media(max-width: 1200px){
    height: 10rem;
  }
  @media(max-width: 950px){
    height: 8rem;
  }
  @media(max-width: 768px){
    height: 13rem;
  }
  @media(max-width: 650px){
    height: 10rem;
  }
  @media(max-width: 500px){
    height: 12rem;
  }
  @media(max-width: 425px){
    height: 12rem;
  }
}

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

export default Gallery