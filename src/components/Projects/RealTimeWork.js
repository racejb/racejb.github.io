import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Overview from './RealTimeWork/Overview';
import Goal from './RealTimeWork/Goal';
// import Process from './RealTimeWork/Process';
import Used from './RealTimeWork/Used';
// import Architecture from './RealTimeWork/Architecture';
// import RealTimeWork from '@images/RealTimeWork3.png';

const RealTimeWorkStyle = styled.article`
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
      color: #ec6375;
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
        color: #ec6375;
        font-size: 1.5rem;
        font-family: Kcc;
      }
    }
  }
`;

const RealTimeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RealTimeWorkStyle>
      <div className="intro">
        <img className="logo" src={RealTimeWork} />
        <p>"실시간으로 빠르게 소통하는 업무 시스템"</p>
      </div>
      <Overview />
      <Goal />
      {/* <Architecture /> */}
      {/* <Process /> */}
      <Used />
    </RealTimeWorkStyle>
  );
};

export default RealTimeWork;
