import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageRightBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 2rem 0;
    color: var(--black);

    .left {
      width: 80%;
      margin: 0 auto;
      .largeImage {
        width: 100%;
        padding-top: 2.5rem;
        .gatsby-image-wrapper {
          width: 100%;
        }
      }
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5rem;
      &__content {
        padding-top: 0;
      }
    }
  }
`;

const ImageRightBlock = ({ title, subtitle, description, img, largeImage }) => (
  <ImageRightBlockStyles>
    <div className="left">
      <div className={`left__img ${largeImage ? 'largeImage' : ''}`}>
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
