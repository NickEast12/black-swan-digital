import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';
import ScrollIcon from '../../svgs/scroll.svg';

const WaveHeaderStyles = styled.div`
  @keyframes scrollAnimationSmall {
    0% {
      transform: translateY(-15px);
    }
    25% {
      opacity: 0;
      transform: translateY(-15px);
    }
    75% {
      opacity: 0.8;
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes scrollAnimationBig {
    0% {
      transform: translateY(-25px);
    }
    75% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
    }
  }
  @media only screen and (min-width: 0px) {
    width: 100%;
    height: 100vh;
    color: white;
    background: var(--background);
    .wave-background {
      width: 100%;
      width: 100%;
      top: 0;
    }
    section {
      position: absolute;
      width: 100%;
      margin: 0 auto;
      padding: 2rem 0;
      z-index: 10;
      color: white;
      .header__inner {
        &__content {
          width: 85%;
          padding-top: 5rem;
          margin: 0 auto;
          h1 {
            margin: 0;
            font-size: 2.1rem;
            letter-spacing: -1px;

            overflow: hidden;
          }

          p {
            margin: 0.5rem 0;

            overflow: hidden;
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
          button {
            width: 150px;
            margin-top: 1.5rem;
          }
        }
        .scroll {
          text-align: center;
          margin-top: 5rem;
          svg {
            fill: var(--white);
            width: 25px;
            path {
              animation-duration: 1.25s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
              opacity: 0;
              &:first-child {
                animation-name: scrollAnimationBig;
              }

              &:last-child {
                animation-name: scrollAnimationSmall;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    section {
      width: 100%;
      .header__inner {
        width: 100%;
        &__content {
          h1 {
            font-size: 2.7rem;
          }
          p {
            font-size: 1.1rem;
          }
          button {
          }
        }
        .scroll {
          margin-top: 2.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    section {
      .header__inner {
        &__content {
          h1 {
            font-size: 2.9rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
        .scroll {
          margin-top: 5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 50rem;
    section {
      .header__inner {
        padding-top: 4rem;
        h1 {
          font-size: 3.5rem;
        }

        p {
          width: 80%;
          margin-top: 1.5rem;
          font-size: 1.1rem;
        }
        .scroll {
          margin-top: 7rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 55rem;
    section {
      .header__inner {
        width: 80%;
        margin: 0 auto;

        padding-top: 6.5rem;
        &__content {
          width: 80%;
          margin: 0 auto 0 0;
        }
        .scroll {
          margin-top: 10rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    height: 100vh;
    width: 100%;
    section {
      width: 100%;
      margin: 0 auto;
      .header__inner {
        max-width: var(--maxBreakpoint);
        width: 80%;
        &__content {
          margin: 0 auto 0 0;
          padding-top: 4rem;
          width: 80%;
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    section {
      .header__inner {
        .scroll {
          margin-top: 15rem;
        }
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
          <div className="header__inner__content">
            <h1>Award Winning Digital Agency Based in London &amp; Surrey</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ipsum nulla unde.
            </p>
            {/* <h6>Want to get in touch?</h6>
          <span className="bold">Let's talk</span> */}
            <button type="button">
              <span>Find out more</span>
            </button>
          </div>
          <div className="scroll">
            <ScrollIcon />
          </div>
        </div>
      </section>
      <AnimateHeaderBackground />
    </WaveHeaderStyles>
  );
};

export default WaveHeader;
