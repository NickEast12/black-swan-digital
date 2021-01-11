import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* Icon SVGs
import LinkedIn from '../svgs/linkedin.svg';
import Twitter from '../svgs/twitter.svg';
import Facebook from '../svgs/facebook.svg';
import Instagram from '../svgs/instagram.svg';

const FooterStyles = styled.footer`
  @media only screen and (min-width: 0px) {
    width: 100%;
    /* background: var(--background); */
    background: #17191f;
    text-align: center;
    .footer {
      padding: 1rem 0;
      &__logo {
        padding: 2rem 0;
        border: var(--testing);
      }
      &__section {
        padding: 0.65rem 0;
        color: var(--offWhite);
        h5 {
          font-weight: 500;
          font-size: 1.2rem;
          color: var(--white);
        }
        ul {
          list-style: none;
          li {
            margin: 0.5rem 0;
            a {
              list-style: none;
              color: inherit;
              text-decoration: none;
            }
          }
        }
      }
      &__social {
        width: 80%;
        margin: 0 auto;
        div {
          width: 50%;
          margin: 0 auto;
          padding: 1rem 0;
          display: flex;
          justify-content: space-between;
          svg {
            fill: var(--offWhite);
            width: 18.5px;
          }
        }
      }
    }
    section {
      width: 100%;
      /* background: linear-gradient(
        to right,
        var(--mainColour),
        var(--mainColourLighter)
      ); */
      background: var(--black);
      color: var(--mainColour);
      div {
        width: 80%;
        margin: 0 auto;
        padding: 0.85rem 0;
        p {
          font-size: 0.85rem;
          a {
            color: inherit;
            text-decoration: none;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .footer {
      padding: 2rem 0;
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
      display: flex;
      text-align: left;
      justify-content: space-evenly;
      gap: 1rem;
      &__logo {
        flex-grow: 0.1;
      }
      &__social {
        width: 40%;
      }
    }
    section {
      div {
        text-align: left;
        width: 80%;
      }
    }
  }
`;

const Footer = () => {
  console.log('footer');
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__logo">
          <img src="" alt="Logo" />
        </div>
        <div className="footer__section">
          <h5>Menu</h5>
          <ul>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h5>Services</h5>
          <ul>
            <li>
              <Link to="/blog">Web Development</Link>
            </li>
            <li>
              <Link to="/blog">Web Design</Link>
            </li>
            <li>
              <Link to="/blog">Digital Marketing</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h5>Contact</h5>
          <ul>
            <li>
              <Link to="/blog">075 2821 6309</Link>
            </li>
            <li>
              <Link to="/blog">info@blackswandigital.com</Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <section>
        <div>
          <p>
            &copy; Black Swan Digital {new Date().getFullYear()} |
            <span>
              <Link to="privacy-policy"> Privacy Policy</Link>
            </span>
          </p>
        </div>
      </section>
    </FooterStyles>
  );
};

export default Footer;
