import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';

const WaveHeaderStyles = styled.div`
  width: 100%;
  height: 100vh;

  /* background-image: linear-gradient(
    90deg,
    var(--mainColour),
    var(--mainColourLighter)
  ); */

  color: white;
  .wave-background {
    width: 100%;
    width: 100%;
    top: 0;
  }
  section {
    position: absolute;
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    z-index: 10;
    color: white;
    .header__inner {
      width: 80%;
      padding-top: 5rem;
      margin: 0 auto;
      h1 {
        margin: 0;
        font-size: 2rem;
        letter-spacing: -2px;
      }
      p {
        margin: 0.5rem 0;
      }
      h6 {
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: 500;
      }
      .bold {
        margin-top: 0.25rem;
        display: block;
        font-weight: 900;
        color: var(--mainColour);
      }
    }
  }
`;
const WaveHeader = () => {
  const stay = 'i';
  return (
    <WaveHeaderStyles>
      <section>
        <div className="header__inner">
          <h1>Award Winning Digital Agency Based in London &amp; Surrey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum
            nulla unde.
          </p>
          <h6>Want to get in touch?</h6>
          <span className="bold">Let's talk</span>
        </div>
      </section>
      <AnimateHeaderBackground />
    </WaveHeaderStyles>
  );
};

export default WaveHeader;
