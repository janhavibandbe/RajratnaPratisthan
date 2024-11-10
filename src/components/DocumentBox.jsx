import React from 'react';
import styled from 'styled-components';


function DocumentBox({id, image, content, link}) {

  return(
    <Card>
      <div className="card-box">
          <div className="image">
            <img src={image} alt=""/>
          </div>

          <div className="card-box-body">
            {content}
          </div>

          <div className="link">
            <a href={link} target='_blank'>View here</a>
          </div>
      </div>
    </Card>
  )

}

const Card = styled.div`
.card-box{

    height: 20rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 1px 5px 10px #ccc;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    @media (max-width: 875px) {
        height: 18rem;
    }
    @media (max-width: 768px) {
        box-shadow: 1px 3px 5px #ccc;
    }
    @media (max-width: 600px) {
        gap: 0.5rem;
        padding: 0.5rem;
    }
    @media (max-width: 425px){
        height: 17rem;
    }
}
.card-box:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.05);
}

.card-box .image{
width: 100%;
display: flex;
justify-content: center;
    overflow: hidden;
    @media (max-width: 875px) {
        height: 8rem;
    }
}
.card-box .image img{
    object-fit: cover;
    width: 100%;
    height: 10rem;
}
.card-box .card-box-body{
    line-height: 1.2rem;
    @media (max-width: 875px) {
        font-size: 0.9rem;
    }
}
.card-box .link{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    @media (max-width: 875px) {
        font-size: 0.9rem;
    }
}
`;
export default DocumentBox