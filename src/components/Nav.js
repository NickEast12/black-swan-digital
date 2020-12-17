import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import useDocumentScrollThrottled from './hooks/useDocumentScrollThrottled.js';
//* Icon SVGs
import LinkedIn from '../svgs/linkedin.svg';
import Twitter from '../svgs/twitter.svg';
import Facebook from '../svgs/facebook.svg';
import Instagram from '../svgs/instagram.svg';

const Nav = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 500;
  const TIMEOUT_DELAY = 400;
  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  const menuItemsStyle = shouldShowShadow ? 'show' : '';
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <MobileNav open={open} />
        <DesktopNav className={` style ${shadowStyle}`} />
      </header>
    </>
  );
};

export default Nav;

const MobileNavStyles = styled.div`
  @media only screen and (min-width: 0px) {
    /* background: ${({ open }) =>
      open ? 'var(--background)' : 'var(--white)'}; */
    background: none;
    transition: all 0s ease;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    .mob {
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      &__logo {
        flex-grow: 2;
      }
      &__btn {
        margin: 0 0.5rem;
        button {
          padding: 0.45rem 0;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const HamburgerStyles = styled.div`
  position: relative;
  width: 50px;
  height: 36px;
  outline: none !important;
  padding: 0.6rem 0.75rem;

  > div {
    width: 20px;
    height: 2px;
    margin-bottom: 4px;
    background: var(--offWhite);
    transition: all 0.3s ease;
    transform-origin: 0.7px;
  }
  div:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
  }
  div:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(50px)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
  div:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-40deg)' : 'rotate(0deg)')};
  }
`;

const MobileMenuStyles = styled.div`
  @keyframes liAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  @keyframes iconAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  width: 100%;
  height: 100vh;
  background: ${({ open }) => (open ? 'var(--background)' : 'var(--white)')};
  visibility: ${({ open }) => (open ? 'visiable' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  z-index: 99;
  transition: background 0.3s, opacity 0.1s;

  > div {
    width: 80%;
    padding-top: 7.5rem;
    margin: 0 auto;
    text-align: center;
    display: ${({ open }) => (open ? 'block' : 'none')};
    ul {
      list-style: none;
      a[aria-current='page'] {
        li {
          color: var(--white);
        }
      }
      a {
        text-decoration: none;
        color: var(--white);
        &:nth-child(1) {
          li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
              forwards;
          }
        }
        &:nth-child(2) {
          li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.7s
              forwards;
          }
        }
        &:nth-child(3) {
          li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.9s
              forwards;
          }
        }
        &:nth-child(4) {
          li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 1.1s
              forwards;
          }
        }
        &:nth-child(5) {
          li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 1.3s
              forwards;
          }
        }
        li {
          padding-bottom: 2rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: #a9a7b1;
          opacity: 0;
          z-index: -1;
          transform: translateY(15px);
        }
      }
    }
  }
  .icons {
    > div {
      width: 130px;
      margin: 6rem auto 0 auto;
      display: flex;
      text-align: center;
      display: flex;
      justify-content: space-between;
      a {
        opacity: 0;
        transform: translateY(40px);
        &:nth-child(1) {
          animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.65s 1.6s
            forwards;
        }
        &:nth-child(2) {
          animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.65s 1.8s
            forwards;
        }
        &:nth-child(3) {
          animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.65s 2s
            forwards;
        }
        &:nth-child(4) {
          animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.65s 2.2s
            forwards;
        }
        svg {
          fill: var(--offWhite);
          transition: fill 0.3s ease;
          &:hover {
            fill: var(--mainColour);
          }
        }
      }
    }
  }
`;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div>
      <MobileNavStyles open={open}>
        <div className="mob">
          <div className="mob__logo">
            <Link to="/">
              <p>Logo</p>
            </Link>
          </div>
          <div className="mob__btn">
            <Link to="/contact">
              <button type="button">
                <span>Contact</span>
              </button>
            </Link>
          </div>
          <HamburgerStyles
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
            role="button"
            tabIndex={0}
            open={open}
          >
            <div />
            <div />
            <div />
          </HamburgerStyles>
        </div>
      </MobileNavStyles>
      <MobileMenuStyles open={open}>
        <div>
          <ul>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/about-us">
              <li>About us</li>
            </Link>
            <Link to="/work">
              <li>Work</li>
            </Link>
            <Link to="/clients">
              <li>Clients</li>
            </Link>
            <Link to="/blogs">
              <li>Blog</li>
            </Link>
          </ul>
          <section className="icons">
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
          </section>
        </div>
      </MobileMenuStyles>
    </div>
  );
};
const DesktopNavStyles = styled.div`
  @media only screen and (min-width: 0px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    display: block;
    .desktop__nav__wrapper {
      width: 90%;
      margin: 0 auto;
      padding: 2rem 0;
      .desktop {
        display: flex;
        justify-content: space-between;
        &__nav {
          ul {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-evenly;
            gap: 1rem;
            li {
              color: var(--white);
              a {
                color: inherit;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
`;
const DesktopNav = () => (
  <DesktopNavStyles>
    <div className={`desktop__nav__wrapper `}>
      <div className="desktop">
        <div className="desktop__img">
          <Link to="/">
            <img src="" alt="Logo" />
          </Link>
        </div>
        <div className="desktop__nav">
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">
                <button type="button">
                  <span>Contact</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </DesktopNavStyles>
);
