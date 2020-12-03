import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';
import SingleProject from './singleProject';

const IndexPorjectsStyles = styled.div`
  width: 100%;
  padding: 2rem 0;
  > section {
    width: 80%;
    margin: 0 auto;
    h2 {
      color: var(--mainColour);
      font-weight: 500;
      text-align: center;
      letter-spacing: -0.1px;
      text-transform: uppercase;
      margin: 1rem 0 0.5rem 0;
      font-size: 1.2rem;
    }
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--background);
  }
`;
const IndexProjects = ({ indexProject }) => {
  console.log(indexProject);
  return (
    <IndexPorjectsStyles>
      <section>
        <h2>Our work</h2>
        <h3>Our latest projects</h3>
        {indexProject.map((projets) => (
          <SingleProject key={projets.id} project={projets} />
        ))}
      </section>
    </IndexPorjectsStyles>
  );
};

export default IndexProjects;
