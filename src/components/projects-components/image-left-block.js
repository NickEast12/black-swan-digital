import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';
//* background
import Background from '../../assets/images/bs-background.png';

const ImageLeftBlockStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 5rem 0;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    color: var(--white);
    .left {
      width: 80%;
      margin: 0 auto;
      &__img {
        width: 80%;
        margin: 0 auto;
        .gatsby-image-wrapper {
          height: auto;
          max-width: 100%;
          width: 100%;
        }
      }
      &__content {
        padding: 3rem 0;
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
      grid-gap: 5rem;
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

const ImageLeftBlock = ({ title, description, img }) => (
  <ImageLeftBlockStyles>
    <div className="left">
      <div className="left__img">
        <Image filename={img} />
      </div>
      <div className="left__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </ImageLeftBlockStyles>
);

export default ImageLeftBlock;
