import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../functional/animatedHeader';

const ProjectHeaderStyles = styled.div`
  width: 100%;
  height: 70vh;
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
    </div>
  </ProjectHeaderStyles>
);

export default ProjectHeader;
