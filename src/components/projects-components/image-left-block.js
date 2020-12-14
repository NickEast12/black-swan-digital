import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageLeftBlockStyles = styled.div`
  width: 100%;
  padding: 2rem 0 0 0;

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
      p {
      }
      ul {
        list-style: inside;
        margin: 1rem 0;
        li {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

const ImageLeftBlock = ({ title, description }) => (
  <ImageLeftBlockStyles>
    <div className="left">
      <div className="left__img">
        <Image filename="vs-cover.jpg" />
      </div>
      <div className="left__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>Point 1</li>
          <li>Point 1</li>
          <li>Point 1</li>
          <li>Point 1</li>
          <li>Point 1</li>
          <li>Point 1</li>
        </ul>
      </div>
    </div>
  </ImageLeftBlockStyles>
);

export default ImageLeftBlock;
