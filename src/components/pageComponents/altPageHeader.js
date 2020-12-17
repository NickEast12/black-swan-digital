import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';

const AltPageHeaderStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    background: var(--background);
    margin-top: -2rem;
    height: 70vh;
    section {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 5;
      color: var(--white);
      .alt__header__inner {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 7rem 0;
        span {
          color: var(--mainColour);
          margin: 0.5rem 0;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.1px;
          text-transform: uppercase;
        }
        h1 {
          margin: 0.5rem 0;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    height: 60vh;
    section {
      padding-top: 1rem;
      .alt__header__inner {
        span {
          font-size: 1.2rem;
        }
        h1 {
          font-size: 2.25rem;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    height: 55vh;
    section {
      padding-top: 1.2rem;
    }
  }
`;
const AltPageHeader = ({ title, description }) => {
  const i = 'stay';
  return (
    <AltPageHeaderStyles>
      <section>
        <div className="alt__header__inner">
          <span>{title}</span>
          <h1>{description}</h1>
        </div>
      </section>
      <AnimateHeaderBackground />
    </AltPageHeaderStyles>
  );
};

export default AltPageHeader;
