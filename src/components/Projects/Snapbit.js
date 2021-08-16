import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SnapbitStyle = styled.article`
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
      color: #68b8f5;
      font-size: 2.5rem;
      font-family: Kcc;
    }
  }
`;

const Snapbit = () => {
  return (
    <SnapbitStyle>
      <div className="intro">
        {/*<img className="logo" src={theQuizLive} />*/}
        <p>"블록체인 뉴스 커뮤니티, 스냅빗"</p>
      </div>
      {/*<Overview />*/}
      {/*<Goal />*/}
      {/*<Architecture />*/}
      {/*<Process />*/}
      {/*<UI />*/}
      {/*<Used />*/}
      {/*<Branding />*/}
    </SnapbitStyle>
  );
};

export default Snapbit;
