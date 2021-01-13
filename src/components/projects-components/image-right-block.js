import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageRightBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 5rem 0;
    background: #0b0d0f;
    color: var(--white);
    .left {
      width: 80%;
      margin: 0 auto;
      &__img {
        .gatsby-image-wrapper {
          border-radius: 4.5px;
        }
      }
      &__content {
        padding: 1rem 0;
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
      grid-gap: 2rem;
      &__content {
        padding-top: 0;
      }
    }
  }
`;

const ImageRightBlock = ({ title, subtitle, description }) => (
  <ImageRightBlockStyles>
    <div className="left">
      <div className="left__img">
        <Image filename="vs-cover.jpg" />
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
