import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageRightBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 2rem 0;
    color: var(--black);
    .largeImage {
      width: 100%;
      padding-top: 2.5rem;
      .gatsby-image-wrapper {
        width: 100%;
      }
    }
    .left {
      width: 80%;
      margin: 0 auto;

      &__img {
        width: 50%;
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
    .left {
      padding: 2rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5rem;
      &__content {
        padding-top: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .left {
      max-width: var(--maxBreakpoint);
      grid-gap: 2rem;
      padding-bottom: 4rem;
      &__img {
        .gatsby-image-wrapper {
          height: auto;

          width: 90%;
        }
      }
      &__content {
        padding-top: 4rem;
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .left {
      &__img {
        .gatsby-image-wrapper {
          width: 250px;
        }
      }
      &__content {
        width: 80%;
        padding-top: 8rem;
      }
    }
  }
`;

const ImageRightBlock = ({ title, subtitle, description, img }) => (
  <ImageRightBlockStyles>
    <div className="left">
      <div className="left__img">
        <Image filename={img} />
      </div>
      <div className="left__content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  </ImageRightBlockStyles>
);

export default ImageRightBlock;
