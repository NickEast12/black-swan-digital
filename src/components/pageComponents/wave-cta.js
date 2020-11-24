import React from 'react';
import styled from 'styled-components';
import WaveSVG from '../../assets/images/wave.svg';

const WaveCTAStyles = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: linear-gradient(
    90deg,
    var(--mainColour),
    var(--mainColourLighter)
  );
  background-repeat: repeat-x;
  color: #fff;
  .wave {
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 10vw;
    background-image: url(${WaveSVG});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    content: '';
    margin-top: -1px;
    z-index: 50;
  }
  .wave__content {
    width: 100%;
    padding: 2rem 0;
    &__inner {
      width: 70%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
const WaveCTA = () => (
  <WaveCTAStyles>
    <div className="wave" />
    <div className="wave__content">
      <div className="wave__content__inner">
        <h4>Let's Talk</h4>
        <p>
          Whether you already have a project specification, or you just want to
          learn more about the way we work, we are just an email away.
        </p>
        <button type="button">Get in Touch</button>
      </div>
    </div>
  </WaveCTAStyles>
);

export default WaveCTA;
