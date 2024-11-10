import React from 'react';
import styled from 'styled-components';
import QR from '../images/QR.jpeg'

function QRSection() {
  return (
    <QRContainer>
      <div className="qrpage">

        <div className="left">
          <div className="left-title">
          Why Your Support Counts
          </div>

          <div className="left-box">
            <div className="box-title">Empower Lives</div>
            <div className="box-content">
                Your contribution directly helps individuals with mental challenges gain access to essential resources, enabling them to lead more fulfilling lives.
            </div>
          </div>

          <div className="left-box">
            <div className="box-title">Provide Critical Care</div>
            <div className="box-content">
                Donations ensure that we can offer necessary medical attention, therapy, and support tailored to each individual’s needs.
            </div>
          </div>

          <div className="left-box">
            <div className="box-title">Sustainable Support</div>
            <div className="box-content">
                Your generosity helps us maintain food, shelter, and daily care, creating a stable environment for those we serve.
            </div>
          </div>

          <div className="left-box">
            <div className="box-title">Community Integration</div>
            <div className="box-content">
                With your help, we can organize programs that promote social skills and integration, fostering a sense of belonging and purpose.
            </div>
          </div>

          <div className="left-box">
            <div className="box-title">Education and Awareness</div>
            <div className="box-content">
                Donations fund educational initiatives that raise awareness about mental health issues, breaking stigma and encouraging community support.
            </div>
          </div>
        </div>

        <div className="right">
            <QrTitle>Scan this QR Code </QrTitle>
            <QrImage src={QR} alt="QR Code" />
            <div className="upi">
                UPI id: {import.meta.env.VITE_REACT_APP_UPIID}
            </div>

            <div className="account">
                <div className="accountInfo">
                    Account Holder's name: {import.meta.env.VITE_REACT_APP_ACCOUNT_HOLDERS_NAME}
                </div>
                <div className="accountInfo">
                    Account number: {import.meta.env.VITE_REACT_APP_ACCOUNT_NO}
                </div>
                <div className="accountInfo">
                    IFSC Code: {import.meta.env.VITE_REACT_APP_IFSC_CODE}
                </div>
                <div className="accountInfo">
                    Bank: {import.meta.env.VITE_REACT_APP_BANK_NAME_BRANCH}
                </div>
            </div>
        </div>

      </div>
    </QRContainer>
  )
}

const QRContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #1d184f;
padding-block: 1rem;

  .qrpage{
    width: 80%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;

    @media(max-width: 1024px){
      width: 90%;
    }
    @media(max-width: 768px){
      grid-template-columns: 100%;
    }
  }

  .left{
  
  }

  .left .left-title{
    color: #f06c40;
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 1rem;

    @media(max-width: 768px){
      text-align: center;
      margin-bottom: 0.5rem;
    }
    @media(max-width: 550px){
      font-size: 1.5rem;
    }
  }

  .left-box .box-title{
    color: #fff;
    font-size: 1.5rem;
    font-weight: bolder;

    @media(max-width: 1024px){
      font-size: 1.2rem;
    }
    @media(max-width: 550px){
      font-size: 1rem;
    }
  }

  .left-box .box-content{
    color: #ccc;
    padding-left: 2rem;
    padding-bottom: 1rem;

    @media(max-width: 768px){
      font-size: 0.9rem;
      padding-bottom: 0.5rem;
    }
    @media(max-width: 550px){
      font-size: 0.8rem;
      padding-left: 1rem;
    }
  }

  .right{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right .upi{
    color: #fff;
    width: 100%;
    font-weight: bolder;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1rem;
      justify-content: center;
    }
  }

  .right .account{
    margin-top: 3rem;

    @media(max-width: 768px){
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .right .accountInfo{
    width: 100%;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 450;
    display: flex;
    justify-content: center;
    text-align: center;
    @media (max-width: 1440px) {
      font-size: 1.2rem;
    }
    @media (max-width: 1024px) {
      font-weight: 400;
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
      justify-content: center;
    }
    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }
`;

const QrTitle = styled.h2`
  font-size: 2rem;
  color: #f06c40;
  margin-bottom: 50px;
  font-weight: bold;
  margin-top: 10px;
  @media(max-width: 1024px){
    margin-top: 5px;
  }
  @media(max-width: 768px){
    font-size: 1.8rem;
  }
  @media (max-width: 768px){
    margin-bottom: 25px;
  }
  @media (max-width: 550px){
    font-size: 1.5rem;
  }
`;

const QrImage = styled.img`
  width: 300px;
  height: 300px;
  border: 2px solid #d35400;
  border-radius: 10px;
  margin-bottom: 10px;
  @media(max-width: 768px){
    width: 250px;
    height: 250px;
    margin-bottom: 7px;
  }
  @media (max-width: 550px){
    width: 200px;
    height: 200px;
  }
`;

export default QRSection
