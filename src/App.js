import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Copyright, Header, Home, Nav, Projects, Me } from 'pages';
import { createGlobalStyle } from 'styled-components';
import appleFontWoff from 'assets/fonts/AppleSDGothicNeoL.woff2';
import scDreamFontWoff from 'assets/fonts/SCDream3.woff2';
import kccFontWoff from 'assets/fonts/KCC-eunyoung.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Apple';
    font-style: normal;
    src: local(AppleSDGothicNeoL00),url(${appleFontWoff}) format('woff2');
  }

  @font-face {
    font-family: 'SCDream';
    font-style: normal;
    src: url(${scDreamFontWoff}) format('woff2');
  }

  @font-face {
    font-family: 'Kcc'; 
    font-style: normal;
    src: local(KCC-은영체),url(${kccFontWoff}) format('woff2') ;

  }

  body, textarea, input, button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Apple', sans-serif !important;
    margin: 0;
    cursor: url("/src/assets/cursor.cur") auto;
  }

  body{
    height: 100vh;
    overflow: hidden;
  }
  
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/me" component={Me} />
        </Switch>
        <Copyright />
      </Router>
    </>
  );
};

export default hot(module)(App);
