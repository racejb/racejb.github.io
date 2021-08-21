import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { First, Second, Third, Fourth } from '@components';

const HomeStyle = styled.section`
  height: 100vh;
  transition: transform 1s cubic-bezier(0.55, 0.085, 0, 0.99);
  -webkit-transition: transform 1s cubic-bezier(0.55, 0.085, 0, 0.99);

  transform: translateY(${props => -props.spin * 100}vh);
  -webkit-transform: translateY(${props => -props.spin * 100}vh);
`;

const Home = () => {
  const [spin, setSpin] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [scroll, setScroll] = useState(true);
  const [articleNum] = useState(4);

  const wheelEvent = (e) => {
    if (scroll) {
      setScroll(false);
      if (e.deltaY > 0) {
        spin < articleNum - 1 && setSpin(prev => prev + 1);
      } else spin > 0 && setSpin(prev => prev - 1);
      setTimeout(() => setScroll(true), 800);
    }
  };

  const touchEvent = (e) => {
    switch (e.type) {
      case 'touchstart':
        setTouchStart(e.touches[0].clientY);
        break;
      case 'touchend':
        if (e.changedTouches[0].clientY < touchStart) {
          spin < articleNum - 1 && setSpin(prev => prev + 1);
        } else spin > 0 && setSpin(prev => prev - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('#header').style.backgroundColor = 'transparent';
    document.querySelector('body').style.overflow = 'hidden';
  }, []);

  return (
    <HomeStyle
      spin={spin}
      onWheel={wheelEvent}
      onTouchStart={touchEvent}
      onTouchEnd={touchEvent}
    >
      <First />
      <Second spin={spin} />
      <Third spin={spin} />
      <Fourth spin={spin} />
    </HomeStyle>
  );
};

export default Home;
