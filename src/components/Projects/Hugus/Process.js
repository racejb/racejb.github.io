import React, { useState } from 'react';
import styled from 'styled-components';
import process from '@images/process.jpg';

const ProcessStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .item {
    margin: 70px;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: transparent;
    min-width: 800px;

    .num {
      margin: 0;
    }

    .detail {
      display: flex;
      flex-direction: column;

      ul {
        padding: 0;
        margin: 0;
      }

      #head {
        font-size: 1.2rem;

        p {
          margin-top: 5px;
          font-size: 0.8rem;
        }
      }

      #body {
        img {
          width: 100%;
          cursor: ${props => (props.zoom ? 'zoom-out' : 'zoom-in')};
        }
      }
    }
  }

  #zoom {
    position: fixed;
    inset: 0px;
    z-index: ${props => (props.zoom ? 100 : -1)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: ${props => (props.zoom ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;

    img {
      cursor: ${props => (props.zoom ? 'zoom-out' : 'zoom-in')};
      inset: 0px;
      width: 85%;
    }
  }

  @media (max-width: 900px) {
    width: 80%;
    .item {
      min-width: 570px;
    }
  }

  @media (max-width: 600px) {
    width: 80%;
    .item {
      grid-template-columns: 1fr 6fr;
      min-width: 300px;
      .detail {
        #head {
          font-size: 1rem;
          p {
            margin-top: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const Process = () => {
  const [zoom, setZoom] = useState(false);

  return (
    <ProcessStyle zoom={zoom}>
      <div className="bar"></div>
      <div className="item">
        <strong className="num">04</strong>
        <div className="detail">
          <ul id="head">
            <strong>작동 프로세스</strong>
            <p>Working Process</p>
          </ul>
          <ul id="body">
            <img alt="process" src={process} onClick={() => setZoom(!zoom)} />
          </ul>
        </div>
      </div>
      <div id="zoom">
        <img alt="process" src={process} onClick={() => setZoom(!zoom)} />
      </div>
    </ProcessStyle>
  );
};

export default Process;
