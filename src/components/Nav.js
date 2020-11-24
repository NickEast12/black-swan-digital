import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import useDocumentScrollThrottled from './hooks/useDocumentScrollThrottled.js';

const Nav = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 80;
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`header ${shadowStyle} ${hiddenStyle}`}>
        <MobileNav open={open} />
        {/* <DesktopNav /> */}
      </header>
    </>
  );
};

export default Nav;

const MobileNavStyles = styled.div`
  background: ${({ open }) => (open ? 'var(--background)' : 'var(--white)')};
  transition: all 0.3s ease;
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
    }
  }
`;
const HamburgerStyles = styled.div`
  position: relative;
  width: 50px;
  height: 36px;
  outline: none !important;
  padding: 0.75rem;
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
  width: 100%;
  height: 100vh;
  background: var(--background);
  background: ${({ open }) => (open ? 'var(--background)' : 'var(--white)')};
  visibility: ${({ open }) => (open ? 'visiable' : 'hidden')};
  position: fixed;
  top: 0;
  z-index: 99;
  transition: all 0.3s ease;

  div {
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
`;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.style.position = 'fixed';
  }
  if (!open) {
    document.body.style.position = 'static';
  }
  return (
    <div>
      <MobileNavStyles open={open}>
        <div className="mob">
          <div className="mob__logo">
            <p>Logo</p>
          </div>
          <div className="mob__btn">
            <button type="button">
              <span>Contact</span>
            </button>
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
            <Link to="/blogs">
              <li>Blog</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </MobileMenuStyles>
    </div>
  );
};

const DesktopNav = () => (
  <div>
    <h1>DesktopNav</h1>
  </div>
);
