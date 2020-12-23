import React from 'react';
import styled from 'styled-components';
import SingleProject from './singleProject';

const PageProjectsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .services__projects {
      width: 80%;
      margin: 0 auto;
      > h4 {
        color: var(--mainColour);
        font-weight: 500;
        text-align: center;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.4rem;
      }
      > p {
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .services__projects {
      padding-bottom: 2.5rem;
      section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
    }
  }
`;

const PageProjects = ({ projects, title, description }) => (
  <PageProjectsStyles>
    <div className="services__projects">
      <h4>{title}</h4>
      <p>{description}</p>
      <section>
        {projects.map((project) => (
          <SingleProject key={project.title} project={project} />
        ))}
      </section>
    </div>
  </PageProjectsStyles>
);

export default PageProjects;
