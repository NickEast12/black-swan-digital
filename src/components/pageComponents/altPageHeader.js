import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';
import Bread from '../functional/Breadcrums';

const AltPageHeaderStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    background: var(--background);
    margin-top: -2rem;
    height: 29rem;
    position: relative;
    section {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 5;
      color: var(--white);
      .alt__header__inner {
        width: 80%;
        margin: 0 auto;
        text-align: left;
        padding: 10rem 0;
        span {
          margin: 0.5rem 0;
        }
        h1 {
          margin: 0.5rem 0;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    height: 32rem;
    section {
      padding-top: 0rem;
      .alt__header__inner {
        .title--style {
          font-size: 1.2rem;
        }
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    height: 32rem;
    section {
      padding-top: 0.85rem;
      .alt__header__inner {
        .title--style {
          font-size: 1.5rem;
          h1 {
            font-size: 3rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 36em;
    section {
      padding-top: 4.5rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    section {
      padding-top: 6rem;
      .alt__header__inner {
        .title--style {
          font-size: 1.5rem;
        }
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    section {
      padding-top: 3rem;
    }
  }
`;
const AltPageHeader = ({ title, description, pageContext }) => {
  const i = 'stay';
  return (
    <AltPageHeaderStyles>
      <section>
        <div className="alt__header__inner">
          <span className="title--style">{title}</span>
          <h1>{description}</h1>
          <Bread breaddata={pageContext.breadcrumb} />
        </div>
      </section>
      <AnimateHeaderBackground />
    </AltPageHeaderStyles>
  );
};

export default AltPageHeader;
