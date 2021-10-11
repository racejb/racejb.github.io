import React, { useEffect } from 'react';
import styled from 'styled-components';
import flower from '@images/flower.png';

const SecondStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.spin == 1 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)'};
  transition: all 2s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  .container {
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    p {
      color: white;
    }
    #title {
      p {
        font-size: 2rem;
        font-weight: 600;
      }
    }
    #introduce {
      p {
        margin: 0;
      }
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    z-index: -1;
  }
  .background2 {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: -2;
  }
  @media (max-width: 500px) {
    .container {
      min-width: 290px;
      align-items: center;
      #title {
        p {
          font-size: 20px;
          font-weight: 600;
          text-align: center;
        }
      }
      #introduce {
        p {
          text-align: center;
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
`;

const Second = ({ spin }) => {
  return (
    <SecondStyle spin={spin}>
      <div className="container">
        <div id="title">
          <p>안녕하세요. front-end developer 문준범입니다.</p>
        </div>
        <div id="introduce">
          <p>당연함과는 거리를 두고</p>
          <p>'왜'라는 물음을 가까이해</p>
          <p>끊임 없이 더 나은 것을 찾으려 노력합니다</p>
        </div>
      </div>
      <div
        className="background"
        style={{ backgroundImage: `url(${flower})` }}
      ></div>
      <div className="background2"></div>
    </SecondStyle>
  );
};

export default Second;
