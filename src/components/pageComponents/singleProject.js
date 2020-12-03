import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const SingleProjectStyles = styled.div`
  width: 100%;
  position: relative;
  height: 20rem;
  margin: 2.5rem 0 2rem 0;
  border-radius: 4.5px;
  a {
    color: inherit;
    text-decoration: none;
  }
  .single__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      background: var(--background);
      opacity: 0.1;
      border-radius: 4.5px;
    }
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 4.5px;
    }
  }
  .single__content {
    position: relative;
    z-index: 5;
    padding: 1rem;
    color: var(--white);
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    ul {
      list-style: none;
      display: flex;
      li {
      }
    }
  }
`;
const SingleProject = ({ project }) => {
  const cat = project.categories;
  return (
    <SingleProjectStyles>
      <Link to={`/work/${project.slug.current}`}>
        <div className="single__background">
          <Img fluid={project.projectImage.asset.fluid} alt={project.title} />
        </div>
        <div className="single__content">
          <h4>{project.title}</h4>
          <ul>
            {cat.map((i, index) => (
              <li key={i.title}>
                {`${i.title}`}
                {index < i.length + -1 ? '' : ',\u00A0'}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </SingleProjectStyles>
  );
};

export default SingleProject;
