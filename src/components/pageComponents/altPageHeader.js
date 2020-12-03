import React from 'react';
import styled from 'styled-components';
//* wave svg
import TopWave from '../../assets/images/wave-top.svg';

const AltPageHeaderStyles = styled.div`
  width: 100%;
  background: var(--background);
  margin-top: -2rem;
  height: 70vh;
  position: relative;
  div {
    width: 80%;
    margin: 0 auto;
    padding: 7rem 0 3rem 0;
    color: var(--white);
  }
  section {
    width: 100%;
    height: 2.5rem;
    position: absolute;
    left: 0;
    right: 0;
    /* bottom: -14.8rem; */
    bottom: -1px;
    background-image: url(${TopWave});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    content: '';
    z-index: 50;
  }
`;
const AltPageHeader = ({ title, description }) => {
  const i = 'stay';
  return (
    <AltPageHeaderStyles>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <section />
    </AltPageHeaderStyles>
  );
};

export default AltPageHeader;
