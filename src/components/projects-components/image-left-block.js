import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const ImageLeftBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 4rem 0 3rem 0;
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
  }
  @media only screen and (min-width: 768px) {
    .left {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'Content Img';
      grid-gap: 2rem;
      &__content {
        padding-top: 0;
        grid-area: Content;
      }
      &__img {
        grid-area: Img;
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
