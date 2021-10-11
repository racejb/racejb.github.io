import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  padding: 40px 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    text-decoration: none;
    color: white;
  }

  #title {
    font-size: 1.7rem;
    font-weight: 800;
  }

  #email {
    font-size: 0.9rem;
    margin-left: 10%;
  }

  @media (max-width: 500px) {
    padding: 40px 40px;
    transition: all 0.5s ease-in-out;
    #title {
      font-size: 1.2rem;
    }
    #email {
      font-size: 10px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle id="header">
      <Link to="/" id="title">
        RACEJB
      </Link>
      <a href="mailto:moonnr94@gmail.com" id="email">
        MOONNR94@GMAIL.COM
      </a>
    </HeaderStyle>
  );
};

export default Header;
