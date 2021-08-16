import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;

  .nav__btn {
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 45px;
    right: 7%;
    background: none;
    border: none;
    cursor: pointer;

    span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
    }

    span:nth-child(1) {
      top: 5px;
      right: 1px;
    }

    span:nth-child(2) {
      top: 15px;
      right: 1px;
    }

    span:nth-child(3) {
      top: 25px;
      right: 1px;
    }
  }

  .nav__menu {
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    width: ${props => (props.open ? '500px' : '0')};
    height: 100vh;
    background-color: #212121;
    transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
    transition-delay: ${props => (props.open ? '0s' : '0.5s')};

    .nav__btn {
      position: absolute;
      width: 35px;
      height: 35px;
      top: 45px;
      left: 10%;
      background: none;
      border: none;
      cursor: pointer;
      transition-delay: 1s;
      transition: 1s ease-in-out;

      span {
        transition: all 0.3s ease-in-out;
        transition-delay: ${props => (props.open ? '0.5s' : '0.1s')};
        opacity: ${props => (props.open ? '1' : '0')};
      }

      span:nth-child(1) {
        ${props =>
          props.open
            ? 'transform:rotate(-45deg); top:15px;right:1px'
            : 'top:5px;right:1px'}
      }

      span:nth-child(2) {
        ${props =>
          props.open ? 'opacity: 0;top:15px;right:1px' : 'top:15px;right:1px'}
      }

      span:nth-child(3) {
        ${props =>
          props.open
            ? 'transform: rotate(45deg);top:15px;right:1px'
            : 'top:25px;right:1px'}
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 40%;
      list-style: none;
      padding: 0;
      li {
        width: 100%;
        transition: all 0.4s ease-in-out;

        a {
          font-family: AppleSDGothicNeoEB00;
          text-decoration: none;
          text-align: left;
          font-size: 2rem;
          background: none;
          color: white;
          cursor: pointer;
          -webkit-font-smoothing: antialiased;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.5px white;
          font-weight: bolder;
          line-height: 5rem;
          transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
          :hover {
            -webkit-text-stroke: 0.5px mediumpurple;
            -webkit-text-fill-color: mediumpurple;
          }
        }
        :nth-child(1) {
          transform: translateX(${props => (props.open ? 0 : 100)}px);
          transition-delay: ${props => (props.open ? '0.5s' : '0.45s')};
          opacity: ${props => (props.open ? '1' : '0')};
        }
        :nth-child(2) {
          transform: translateX(${props => (props.open ? 0 : 100)}px);
          transition-delay: ${props => (props.open ? '0.65s' : '0.3s')};
          opacity: ${props => (props.open ? '1' : '0')};
        }
        :nth-child(3) {
          transform: translateX(${props => (props.open ? 0 : 100)}px);
          transition-delay: ${props => (props.open ? '0.8s' : '0.15s')};
          opacity: ${props => (props.open ? '1' : '0')};
        }
      }
    }

    .sites {
      display: flex;
      width: 50%;
      padding-top: 200px;
      button {
        background: none;
        border: none;
        height: 50px;
        cursor: pointer;
        transform: translateX(${props => (props.open ? 0 : 100)}px);
        transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        transition-delay: ${props => (props.open ? '1s' : '0s')};
        opacity: ${props => (props.open ? '1' : '0')};
        a {
          color: lightgray;
          font-size: 1rem;
          font-weight: 900;
          margin: 0 10px;
          text-decoration: none;
        }
      }

      //#github {
      //  color: lightgray;
      //}
      //#facebook {
      //  color: #4267b2;
      //}
      //#instagram {
      //  color: #fcaf45;
      //}
    }
  }

  @media (max-width: 500px) {
    .nav__btn {
      width: 30px;
      height: 25px;
      top: 35px;
      right: 7%;
      background: none;
      border: none;
      cursor: pointer;

      span:nth-child(1) {
        top: 5px;
        right: 1px;
      }

      span:nth-child(2) {
        top: 13px;
        right: 1px;
      }

      span:nth-child(3) {
        top: 21px;
        right: 1px;
      }
    }

    .nav__menu {
      left: 0;
      width: 100%;
      height: ${props => (props.open ? '100vh' : '0')};
      transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
      -webkit-transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);

      .nav__btn {
        left: 85%;
      }

      ul {
        height: 100%;
        justify-content: center;
        li {
          a {
            font-size: 1.5rem;
          }
        }
      }

      .sites {
        display: flex;
        width: 50%;
        padding-top: 0px;
        button {
          a {
            font-size: 10px;
          }
        }
        //#github {
        //  color: lightgray;
        //}
        //#facebook {
        //  color: #4267b2;
        //}
        //#instagram {
        //  color: #fcaf45;
        //}
      }
    }
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavStyle open={open}>
      <button className="nav__btn" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="nav__menu">
        <button className="nav__btn" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul>
          {/*<li>*/}
          {/*  <Link to="/info" onClick={() => setOpen(!open)}>*/}
          {/*    INFO*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
            <Link to="/projects" onClick={() => setOpen(!open)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/me" onClick={() => setOpen(!open)}>
              IT'S ME
            </Link>
          </li>
        </ul>
        <div className="sites">
          <button>
            <a href="https://github.com/racejb" target="_blank" id="github">
              GH.
            </a>
          </button>
          <button>
            <a
              href="https://www.instagram.com/racejb/?hl=ko"
              target="_blank"
              id="instagram"
            >
              IG.
            </a>
          </button>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
