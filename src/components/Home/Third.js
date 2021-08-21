import React, { useState } from 'react';
import styled from 'styled-components';
import flower from '@images/flower.png';

const ThirdStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.spin == 2 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 1)'};
  transition: all 2s cubic-bezier(0.46, 0.03, 0.52, 0.96);

  .container {
    width: 70%;
    display: flex;
    flex-direction: column;

    .categories {
      display: flex;
      flex-direction: column;

      > div {
        display: grid;
        grid-template-columns: 1fr 7fr;

        p {
          color: white;
          margin: 10px;
        }

        > p {
          font-weight: bold;
          font-size: 20px;
          min-width: 100px;
        }

        ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;

          li {
            list-style: none;
            display: flex;
            align-items: center;

            #title {
              font-size: 17px;
              min-width: 200px;
            }

            div {
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 3px;
              height: 25px;
              width: 100%;
              transition: all ${props => (props.spin === 2 ? '1.5s' : '0.5s')}
                cubic-bezier(0.46, 0.03, 0.52, 0.96);
              div {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: white;
                font-size: 12px;
                padding-right: 5px;
              }
            }

            #javascript {
              width: ${props => (props.spin == 2 ? '85%' : '0%')};
              background: linear-gradient(90deg, #b852cc, #cc5285);
              transition-delay: ${props => (props.spin === 2 ? '0.1s' : '0s')};
            }

            #html {
              width: ${props => (props.spin == 2 ? '85%' : '0%')};
              background: linear-gradient(90deg, #b852cc, #cc5285);
              transition-delay: ${props => (props.spin === 2 ? '1.3s' : '0s')};
            }

            #css {
              width: ${props => (props.spin == 2 ? '80%' : '0%')};
              background: linear-gradient(90deg, #7ea1e5, #9460e2);
              transition-delay: ${props => (props.spin === 2 ? '1.6s' : '0s')};
            }

            #java {
              width: ${props => (props.spin == 2 ? '30%' : '0%')};
              background: linear-gradient(90deg, #cc5285, #e0aaf2);
              transition-delay: ${props => (props.spin === 2 ? '0.7s' : '0s')};
            }

            #solidity {
              width: ${props => (props.spin == 2 ? '30%' : '0%')};
              background: linear-gradient(90deg, #cc5285, #e57e88);
              transition-delay: ${props => (props.spin === 2 ? '1.0s' : '0s')};
            }

            #react {
              width: ${props => (props.spin == 2 ? '85%' : '0%')};
              background: linear-gradient(90deg, #6291ee, #c1c1f3);
              transition-delay: ${props => (props.spin === 2 ? '1.9s' : '0s')};
            }

            #express {
              width: ${props => (props.spin == 2 ? '80%' : '0%')};
              background: linear-gradient(90deg, #e57e88, #db45b4);
              transition-delay: ${props => (props.spin === 2 ? '2.2s' : '0s')};
            }

            #fabric {
              width: ${props => (props.spin == 2 ? '30%' : '0%')};
              background: linear-gradient(90deg, #f2bcaa, #a87ee5);
              transition-delay: ${props => (props.spin === 2 ? '2.5s' : '0s')};
            }

            #ethereum {
              width: ${props => (props.spin == 2 ? '30%' : '0%')};
              background: linear-gradient(90deg, #e57e88, #cc5285);
              transition-delay: ${props => (props.spin === 2 ? '2.8s' : '0s')};
            }

            #klaytn {
              width: ${props => (props.spin == 2 ? '20%' : '0%')};
              background: linear-gradient(90deg, #c779d0, #feac5e);
              transition-delay: ${props => (props.spin === 2 ? '3.1s' : '0s')};
            }

            #docker {
              width: ${props => (props.spin == 2 ? '30%' : '0%')};
              background: linear-gradient(90deg, #fffcdc, #d9a7c7);
              transition-delay: ${props => (props.spin === 2 ? '3.4s' : '0s')};
            }

            #linux {
              width: ${props => (props.spin == 2 ? '55%' : '0%')};
              background: linear-gradient(90deg, #cc5285, #e57e88);
              transition-delay: ${props => (props.spin === 2 ? '3.4s' : '0s')};
            }

            #ubuntu {
              width: ${props => (props.spin == 2 ? '55%' : '0%')};
              background: linear-gradient(90deg, #fffcdc, #d9a7c7);
              transition-delay: ${props => (props.spin === 2 ? '3.4s' : '0s')};
            }

          }
        }
      }

      #language {
      }

      #framework {
      }

      #blockchain {
      }

      #software {
      }
      #OS {
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

  @media (max-width: 1000px) {
    .container {
      width: 85%;
      .categories {
        > div {
          display: flex;
          flex-direction: column;
          > p {
            font-size: 18px;
          }
          ul {
            padding-left: 30px;
            li {
              #title {
                font-size: 15px;
                min-width: 160px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      .categories {
        > div {
          p {
            margin: 5px;
          }
          > p {
            font-size: 15px;
          }
          ul {
            padding: 0;
            padding-left: 20px;
            li {
              #title {
                font-size: 12px;
                width: 60px;
                min-width: 60px;
              }
              div {
                height: 17px;
                width: 70%;
                div {
                  font-size: 10px;
                  padding-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Third = ({ spin }) => {
  return (
    <ThirdStyle spin={spin}>
      <div className="container">
        <div className="categories">
          <div id="language">
            <p id="category">Language</p>
            <ul>
              <li>
                <p id="title">Javascript</p>
                <div>
                  <div id="javascript">85%</div>
                </div>
              </li>
              <li>
                <p id="title">HTML</p>
                <div>
                  <div id="html">85%</div>
                </div>
              </li>
              <li>
                <p id="title">CSS3</p>
                <div>
                  <div id="css">80%</div>
                </div>
              </li>
              <li>
                <p id="title">Java</p>
                <div>
                  <div id="java">30%</div>
                </div>
              </li>
              <li>
                <p id="title">Solidity</p>
                <div>
                  <div id="solidity">30%</div>
                </div>
              </li>
            </ul>
          </div>

          <div id="framework">
            <p>Framework</p>
            <ul>
              <li>
                <p id="title">React.js</p>
                <div>
                  <div id="react">85%</div>
                </div>
              </li>
              <li>
                <p id="title">Express.js</p>
                <div>
                  <div id="express">80%</div>
                </div>
              </li>
            </ul>
          </div>

          <div id="blockchain">
            <p>Blockchain</p>
            <ul>
              <li>
                <p id="title">Hyperledger Fabirc</p>
                <div>
                  <div id="fabric">30%</div>
                </div>
              </li>
              <li>
                <p id="title">Ethereum</p>
                <div>
                  <div id="ethereum">30%</div>
                </div>
              </li>
              <li>
                <p id="title">Klaytn</p>
                <div>
                  <div id="klaytn">20%</div>
                </div>
              </li>
            </ul>
          </div>

          <div id="software">
            <p>Software</p>
            <ul>
              <li>
                <p id="title">Docker</p>
                <div>
                  <div id="docker">30%</div>
                </div>
              </li>
            </ul>
          </div>

          <div id="os">
            <p>OS</p>
            <ul>
              <li>
                <p id="title">Linux</p>
                <div>
                  <div id="linux">55%</div>
                </div>
              </li>
              <li>
                <p id="title">Ubuntu</p>
                <div>
                  <div id="ubuntu">55%</div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div
        className="background"
        style={{ backgroundImage: `url(${flower})` }}
      ></div>
      <div className="background2"></div>
    </ThirdStyle>
  );
};

export default Third;
