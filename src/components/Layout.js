import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Typography from '../styles/Typography';
import Footer from './Footer';
import MainFooter from './MainFooter';

const MainBodyStyles = styled.div``;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <MainBodyStyles>
      <Nav />
      {children}
      {/* <Footer /> */}
      <MainFooter />
    </MainBodyStyles>
  </>
);

export default Layout;
