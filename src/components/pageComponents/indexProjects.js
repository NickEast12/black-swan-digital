import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';
import SingleProject from './singleProject';

const IndexPorjectsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 2rem 0;
    > section {
      width: 80%;
      margin: 0 auto;
      span {
        color: var(--mainColour);
        font-weight: 500;
        text-align: center;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.2rem;
        display: block;
      }
    }
    .project-title {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.4rem;
      color: var(--background);
    }
  }
  @media only screen and (min-width: 768px) {
    > section {
      .single__project__wrapper {
        display: flex;
        gap: 2rem;
      }
    }
  }
`;
const IndexProjects = ({ indexProject }) => {
  console.log(indexProject);
  return (
    <IndexPorjectsStyles>
      <section>
        <span>Our work</span>
        <h4 className="project-title">Our latest projects</h4>
        <div className="single__project__wrapper">
          {indexProject.map((projets) => (
            <SingleProject key={projets.id} project={projets} />
          ))}
        </div>
      </section>
    </IndexPorjectsStyles>
  );
};

export default IndexProjects;
