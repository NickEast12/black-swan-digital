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
      .title--style {
        margin: 1rem 0 0.5rem 0;
        text-align: center;
      }
    }
    h4 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.4rem;
      color: var(--background);
    }
  }
  @media only screen and (min-width: 414px) {
    h4 {
      font-size: 1.6rem;
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 2rem 0 3rem 0;
    h4 {
      font-size: 1.85rem;
    }
    > section {
      .single__project__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    section {
      margin: 0 auto;
      padding: 1rem 0;
      width: 75%;
      h4 {
        font-size: 34px;
      }
      .single__project__wrapper {
        width: 100%;
      }
    }
  }
`;
const IndexProjects = ({ indexProject }) => {
  console.log(indexProject);
  return (
    <IndexPorjectsStyles>
      <section>
        <span className="title--style">Our work</span>
        <h4>Our latest projects</h4>
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
