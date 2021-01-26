import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlackSwanLogo from '../assets/images/icon.png';
import Twitter from '../svgs/twitter.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Instagram from '../svgs/instagram.svg';
import Facebook from '../svgs/facebook.svg';

const MainFooterStyles = styled.footer`
  width: 100%;
  padding: 3rem 0 1rem 0;
  background-color: var(--black);
  .footer {
    width: 80%;
    margin: 0 auto;
    max-width: var(--maxBreakpoint);
    &--logo {
      width: 50%;
      img {
        width: 100%;
      }
    }
    &__lower {
      color: var(--white);

      &--address {
        padding: 2rem 0;
        p {
          font-size: 17px;
          line-height: 1.5;
        }
      }
      &__section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        &--links {
          padding-bottom: 2rem;
          h4 {
            font-size: 18px;
          }
          ul {
            list-style: none;
            padding-top: 5px;
            li {
              margin: 0.5rem 0;
              font-size: 14px;
              color: var(--offWhite);
              a {
                color: inherit;
                text-decoration: none;
              }
            }
          }
        }
      }
      @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        &--address {
          padding: 0;
          flex: 1 1 auto;
          /* background-color: lime; */
        }
        &__section {
          flex: 0.05 0.05 auto;
          margin: 0 0 0 auto;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    &__social {
      width: 100%;
      grid-column: 1 / span 2;
      padding-bottom: 1rem;
      ul {
        display: flex;
        width: 50%;
        margin: 1rem auto;

        justify-content: space-between;
        li {
          svg {
            fill: var(--offWhite);
          }
        }
      }
      @media only screen and (min-width: 768px) {
        ul {
          margin: 1rem 0 1rem auto;
          width: 200px;
        }
      }
    }
    &__legal {
      border-top: 1px solid var(--offWhite);
      padding-top: 1.5rem;
      text-align: center;
      section {
        padding-bottom: 15px;
        font-size: 13px;
        color: var(--offWhite);
        a {
          color: inherit;
          text-decoration: none;
        }
      }
      @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
const MainFooter = () => {
  console.log('footer');
  return (
    <MainFooterStyles>
      <div className="footer">
        <div className="footer--logo">
          <img src={BlackSwanLogo} alt="Black Swan Logo" />
        </div>
        <div className="footer__lower">
          <div className="footer__lower--address">
            <p>
              34 Warren Park Road, <br />
              Sutton, Surrey, <br />
              SM1 4PA <br />
            </p>
          </div>
          <div className="footer__lower__section">
            <div className="footer__lower__section--links">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link to="/clients">Clients</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer__lower__section--links">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a href="https://www.twitter.com">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__legal">
          <section>
            <p>&copy; Black Swan Digital {new Date().getFullYear()}</p>
          </section>
          <section>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </section>
        </div>
      </div>
    </MainFooterStyles>
  );
};

export default MainFooter;
