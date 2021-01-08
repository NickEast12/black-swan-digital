import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* SVGs
import WebDevIcon from '../../svgs/web-development.svg';
import DesignIcon from '../../svgs/web-design.svg';
import SEOIcon from '../../svgs/responsive-design.svg';
import MarketingIcon from '../../svgs/digital-marketing.svg';

const AltServicesStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 2rem 0;
    .offerings__wrapper {
      width: 90%;
      margin: 0 auto;
      &__content {
        text-align: left;
        span {
          padding-bottom: 0.25rem;
        }
        h2 {
          font-size: 1.5rem;
          margin: 0.5rem 0 1rem 0;
        }
        p {
          margin-bottom: 1rem;
        }
      }
      &__boxes {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin-top: 2rem;
        text-align: center;
        section {
          border-radius: 4.5px;
          background: var(--white);
          box-shadow: 0 0 47px -1px rgba(153, 153, 153, 0.2);
          padding: 1.5rem;
          a {
            text-decoration: none;
            svg {
              width: 50px;
            }
            h3 {
              font-size: 1rem;
              margin-top: 0.5rem;
              font-weight: 500;
            }
          }
        }
      }
      &__btn {
        margin-top: 2rem;
        button {
          width: 125px;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .offerings__wrapper {
      padding-top: 1rem;
      width: 80%;
      &__content {
      }
      &__boxes {
        grid-template-columns: repeat(2, 1fr);
      }
      &__btn {
        button {
          font-size: 1rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 2rem 0;
    .offerings__wrapper {
      width: 70%;
      &__content {
        h2 {
          font-size: 1.75rem;
        }
      }
      &__boxes {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      &__btn {
        padding-top: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 3rem 0 4rem 0;
  }
`;
const AltServices = () => (
  <AltServicesStyles>
    <div className="offerings__wrapper">
      <div className="offerings__wrapper__content">
        <span className="title--style">Our Services</span>
        <h2>Our full range of web development services.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt
          nostrum nihil! Fugit dignissimos sequi quos numquam maiores possimus
          molestias voluptate vero perferendis, labore eveniet!
        </p>
      </div>
      <div className="offerings__wrapper__boxes">
        <section>
          <Link to="/">
            <WebDevIcon />
            <h3>Web Development</h3>
          </Link>
        </section>
        <section>
          <Link to="/">
            <DesignIcon />
            <h3>Branding &amp; Design</h3>
          </Link>
        </section>
        <section>
          <Link to="/">
            <SEOIcon />
            <h3>SEO</h3>
          </Link>
        </section>
        <section>
          <Link to="/">
            <MarketingIcon />
            <h3>Digital Marketing</h3>
          </Link>
        </section>
      </div>
      <div className="offerings__wrapper__btn">
        <Link to="/services">
          <button type="button">
            <span>Read More</span>
          </button>
        </Link>
      </div>
    </div>
  </AltServicesStyles>
);

export default AltServices;
