import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--background);
  text-align: center;
  .footer {
    padding: 1rem 0;
    &__logo {
    }
    &__section {
      padding: 0.5rem 0;
      color: var(--offWhite);
      ul {
        li {
          a {
            list-style: none;
            color: inherit;
            text-decoration: none;
          }
        }
      }
    }
  }
  section {
    width: 100%;
    height: 1rem;
    background: linear-gradient(
      to right,
      var(--mainColour),
      var(--mainColourLighter)
    );
  }
`;

const Footer = () => {
  console.log('footer');
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__logo">
          <img src="" alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus beatae laudantium repellat excepturi mollitia.
            Voluptates qui facere quisquam a vero.
          </p>
        </div>
        <div className="footer__section">
          <h5>Menu</h5>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog">Contact</Link>
            </li>
            <li>
              <Link to="/blog">About</Link>
            </li>
            <li>
              <Link to="/blog">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h5>Services </h5>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog">Contact</Link>
            </li>
            <li>
              <Link to="/blog">About</Link>
            </li>
            <li>
              <Link to="/blog">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog">Contact</Link>
            </li>
            <li>
              <Link to="/blog">About</Link>
            </li>
            <li>
              <Link to="/blog">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <section />
    </FooterStyles>
  );
};

export default Footer;
