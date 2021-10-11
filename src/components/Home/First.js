import React, { useEffect } from 'react';
import styled from 'styled-components';
import me from '@images/junbeom.png';

const FirstStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #9370db;
  .container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    p {
      margin: 0;
      color: white;
      font-weight: 600;
    }

    #name {
      margin-bottom: 1rem;
    }

    #job {
      font-size: 6rem;
    }
  }

  .me {
    position: absolute;
    right: 10%;
    width: 600px;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 1400px) {
    .container {
      width: 80%;
    }
    .me {
      right: 0;
    }
  }

  @media (max-width: 1100px) {
    align-items: flex-start;
    .container {
      transform: translateY(150px);
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      #name {
        font-size: 0.8rem;
      }
      #job {
        font-size: 4rem;
      }
    }
    .me {
      left: 50%;
      background-size: 90%;
      transform: translateX(-305px);
    }
  }

  @media (max-width: 500px) {
    .container {
      min-width: 350px;
      #job {
        font-size: 2.5rem;
      }
    }
    .me {
      background-size: 70%;
      background-position: bottom;
    }
  }
`;

const First = () => {
  return (
    <FirstStyle>
      <div className="container">
        <p id="name">JUNBEOM MOON</p>
        <div id="job">
          <p>I'm Junior </p>
          <p>front-end</p>
          <p>Developer ;</p>
        </div>
      </div>
      <div className="me" style={{ backgroundImage: `url(${me})` }}></div>
    </FirstStyle>
  );
};

export default First;
