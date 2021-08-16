import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Overview from './Hugus/Overview';
import Goal from './Hugus/Goal';
import Process from './Hugus/Process';
import Used from './Hugus/Used';
import Architecture from './Hugus/Architecture';
import UI from './Hugus/UI';
import Branding from './Hugus/Branding';
import Youtube from './Hugus/Youtube';
import hugus from '@images/hugus.png';

const HugusStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  color: white;

  .intro {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      width: 400px;
    }

    p {
      color: #ffb73f;
      font-size: 2.5rem;
      font-family: Kcc;
    }
  }

  @media (max-width: 600px) {
    padding-top: 120px;
    .intro {
      height: 250px;
      .logo {
        width: 250px;
      }

      p {
        color: #ffb73f;
        font-size: 1.5rem;
        font-family: Kcc;
      }
    }
  }
`;

const Hugus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HugusStyle>
      <div className="intro">
        <img className="logo" src={hugus} />
        <p>"허그어스, 기부문화의 새로운 방향을 제시하다"</p>
      </div>
      <Overview />
      <Goal />
      <Architecture />
      <Process />
      <UI />
      <Used />
      <Branding />
      <Youtube />
    </HugusStyle>
  );
};

export default Hugus;
