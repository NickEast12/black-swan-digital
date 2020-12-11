import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const SingleProjectStyles = styled.div`
  width: 100%;
  position: relative;
  margin: 2.5rem 0 2rem 0;
  border-radius: 4.5px;

  a {
    color: inherit;
    text-decoration: none;
  }
  .single__background {
    width: 100%;
    height: 12.5rem;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 4.5px;
    }
  }
  .single__content {
    color: var(--black);
    h5 {
      color: var(--mainColour);
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: -0.1px;
      text-transform: uppercase;
      margin: 1rem 0 0.5rem 0;
    }
    h4 {
      font-size: 1.3rem;
      margin: 0;
      font-weight: 500;
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
          <h5>{project.title}</h5>
          {/* <ul>
            {cat.map((i, index) => (
              <li key={i.title}>
                {`${i.title}`}
                {index < i.length + -1 ? '' : ',\u00A0'}
              </li>
            ))}
          </ul> */}
          <h4>{project.shortDescription}</h4>
        </div>
      </Link>
    </SingleProjectStyles>
  );
};

export default SingleProject;
