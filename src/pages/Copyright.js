import React from 'react';
import styled from 'styled-components';

const CopyrightStyle = styled.div`
  position: fixed;
  margin: 40px 80px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;

  p {
    color: #ffffff;
    font-size: 0.8rem;
    margin: 0;
  }
  @media (max-width: 1100px) {
    margin: 0;
    left: -100px;
    min-width: 1100px;
    transform: rotate(90deg) translate(400px, 420px) !important;
    p {
      font-size: 10px;
    }
  }

  @media (max-width: 500px) {
    margin: 0;
    left: 0;
    min-width: 500px;
    transform: rotate(90deg) translate(60px, 230px) !important;
    p {
      font-size: 10px;
      transform: scale(0.7);
      -webkit-transform: scale(0.7);
    }
  }
`;

const Copyright = () => {
  return (
    <CopyrightStyle>
      <p>COPYRIGHT (c) 2021. JUNBEOM MOON.</p>
      <p>ALL RIGHTS RESERVED.</p>
    </CopyrightStyle>
  );
};

export default Copyright;
