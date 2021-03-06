import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* SVG Icons
import WebDevelopment from '../../svgs/web-development.svg';
import UXDesign from '../../svgs/front-end.svg';
import DigitalMarketing from '../../svgs/digital-marketing.svg';
import Arrow from '../../svgs/right-arrow.svg';

const IndexServicesStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 2rem 0;
    .home__services {
      width: 80%;
      margin: 0 auto;

      h2 {
        text-align: center;
        color: var(--mainColour);
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin: 1rem 0 0.5rem 0;
      }
      h3 {
        text-align: center;
        margin-bottom: 5rem;
        font-size: 1.4rem;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .home__services {
      width: 70%;
    }
  }
  @media only screen and (min-width: 768px) {
    .home__services {
      h3 {
        margin-bottom: 0;
      }
      &__boxes {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        gap: 1rem;
      }
    }
  }
`;
const IndexServices = () => (
  <IndexServicesStyles>
    <div className="home__services">
      <h2>Services</h2>
      <h3>Our Digital Services</h3>
      <div className="home__services__boxes">
        <ServicesBoxes
          title="UI/UX Design"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
          slug="/web-development"
        >
          <UXDesign />
        </ServicesBoxes>
        <ServicesBoxes
          title="Web Development"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
          slug="/web-development"
        >
          <WebDevelopment />
        </ServicesBoxes>
        <ServicesBoxes
          title="Digital Marketing"
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
          slug="/web-development"
        >
          <DigitalMarketing />
        </ServicesBoxes>
      </div>
    </div>
  </IndexServicesStyles>
);
const ServicesBoxesStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    background: var(--background);
    color: var(--white);
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 4.5px;
    position: relative;
    margin-top: 5rem;
    .img {
      position: absolute;
      top: -3rem;

      background: linear-gradient(
        to right,
        var(--mainColour),
        var(--mainColourLighter)
      );
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      line-height: 100px;
      vertical-align: middle;
      padding: 20px;
      svg {
        width: 50px;
        fill: var(--white);
      }
    }
    .content {
      h4 {
        font-size: 1.5rem;
        margin: 2rem 0 0.5rem 0;
      }
      p {
        margin: 0.5rem 0;
      }
      span {
        display: flex;
        a {
          color: var(--mainColour);
          font-weight: 500;
          text-decoration: none;

          letter-spacing: -0.1px;
        }
        svg {
          width: 20px;
          margin-right: 10px;
          fill: var(--mainColour);
        }
      }
    }
  }
`;
const ServicesBoxes = ({ title, text, slug, children }) => {
  console.log('boxes');
  return (
    <ServicesBoxesStyles>
      <div className="img">{children}</div>
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
        <span>
          <Arrow />
          <Link to={slug}>Find out more</Link>
        </span>
      </div>
    </ServicesBoxesStyles>
  );
};

export default IndexServices;
