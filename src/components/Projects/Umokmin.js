import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UmokminStyle = styled.article`
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
      width: 350px;
    }

    p {
      margin-top: 50px;
      color: green;
      font-size: 2.5rem;
      font-family: Kcc;
    }
  }
`;

const Umokmin = () => {
  return (
    <UmokminStyle>
      <div className="intro">
        {/*<img className="logo" src={theQuizLive} />*/}
        <p>"여행 커뮤니티, 나만의 특별한 장소 유목민"</p>
      </div>
      {/*<Overview />*/}
      {/*<Goal />*/}
      {/*<Architecture />*/}
      {/*<Process />*/}
      {/*<UI />*/}
      {/*<Used />*/}
      {/*<Branding />*/}
    </UmokminStyle>
  );
};

export default Umokmin;
