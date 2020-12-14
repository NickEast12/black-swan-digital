import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageRightBlockStyles = styled.div`
  width: 100%;
  padding: 2rem 0 2rem 0;
  /* background: var(--background); */
  background: rgb(245, 245, 245);
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
