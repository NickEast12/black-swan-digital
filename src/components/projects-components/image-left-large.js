import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageRightBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 4rem 0 0 0;
    color: var(--black);

    .result {
      width: 80%;
      margin: 0 auto;

      &__img {
        width: 100%;
        margin: 0 auto;
        .gatsby-image-wrapper {
          height: auto;
          max-width: 100%;
        }
      }
      &__content {
        padding: 3rem 0;
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        h4 {
          font-weight: 500;
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
        }
        p {
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .result {
      padding: 2rem 0 4rem 0;
      display: grid;
      grid-template-columns: 56% 1fr;
      grid-gap: 3rem;

      &__content {
        padding-top: 0;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .result {
      width: 80%;
      max-width: var(--maxBreakpoint);
      &__img {
      }
      &__content {
        padding-top: 2.5rem;
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .result {
      width: 80%;
      max-width: var(--maxBreakpoint);
      &__img {
        width: 550px;
      }
      &__content {
        padding-top: 2.5rem;
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`;
const ImageLeftLarge = ({ img, title, subtitle, description }) => (
  <ImageRightBlockStyles>
    <div className="result">
      <div className="result__img">
        <Image filename={img} />
      </div>
      <div className="result__content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  </ImageRightBlockStyles>
);

export default ImageLeftLarge;
