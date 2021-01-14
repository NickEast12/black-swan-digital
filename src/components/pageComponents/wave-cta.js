import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import WaveSVG from '../../assets/images/wave.svg';
import WaveBlackSVG from '../../assets/images/wave-black.svg';

const WaveCTAStyles = styled.section`
  @media only screen and (min-width: 0px) {
    .alt {
      .wave {
        background-image: url(${WaveBlackSVG});
      }
    }
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background-color: var(--background);
    /* background-image: linear-gradient(
    90deg,
    var(--mainColour),
    var(--mainColourLighter)
  ); */
    background-repeat: repeat-x;
    color: #fff;
    .wave {
      position: absolute;
      top: -1px;
      left: -1px;
      right: 0;
      width: 101%;

      height: 13vw;
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
        padding: 2rem 0 1rem 0;
        text-align: center;
        h4 {
          font-size: 1.75rem;
        }
        p {
          margin-top: 0.5rem;
        }
        button {
          margin-top: 1rem;
          width: 150px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--background);
          background: var(--mainColour);
          span {
            color: var(--black);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .wave__content {
      padding: 6rem 0 4rem 0;
      width: 70%;
      margin: 0 auto;
      &__inner {
        h4 {
          font-size: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .wave__content {
      padding: 8rem 0 4rem 0;
      width: 70%;
      margin: 0 auto;
      &__inner {
        h4 {
          font-size: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .wave__content {
      padding: 9rem 0 5rem 0;
      width: 50%;
      max-width: var(--maxBreakpoint);
      h4 {
        font-size: 34px;
      }
    }
  }
`;
const WaveCTA = ({ alt }) => (
  <WaveCTAStyles>
    <div className={`${alt ? 'alt' : ''}`}>
      <div className="wave" />
      <div className="wave__content">
        <div className="wave__content__inner">
          <h4>Let's Talk</h4>
          <p>
            Whether you already have a project specification, or you just want
            to learn more about the way we work, we are just an email away.
          </p>
          <Link to="/contact">
            <button type="button" className="button--alt">
              <span>Get in Touch</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </WaveCTAStyles>
);

export default WaveCTA;
