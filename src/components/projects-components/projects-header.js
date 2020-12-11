import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';
import Image from '../functional/Image';

const ProjectHeaderStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .project__header {
    width: 100%;
    height: 100%;
    padding-top: 7rem;
    margin: 0 auto;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    &__title {
      width: 80%;

      margin: 0 auto;
      z-index: 5;
      color: var(--white);
      h1 {
        margin: 0 0 0.5rem 0;
        font-size: 2rem;
      }
      h2 {
        font-weight: 300;
      }
    }
    &__img {
      width: 80%;
      margin: 2rem auto;
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 4.5px;
      }
    }
  }
`;
const ProjectHeader = ({ title, titleDescription }) => (
  <ProjectHeaderStyles>
    <AnimateHeaderBackground />
    <div className="project__header">
      <div className="project__header__title">
        <h1>{title}</h1>
        <h2>{titleDescription}</h2>
      </div>
      <div className="project__header__img">
        <Image filename="vs-cover.jpg" alt="Vine Street Solutions" />
      </div>
    </div>
  </ProjectHeaderStyles>
);

export default ProjectHeader;
