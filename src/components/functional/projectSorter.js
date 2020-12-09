import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ProjectSorterStyles = styled.div`
  width: 100%;
  ul {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      font-size: 1.2rem;

      a {
        color: inherit;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;
const ProjectSorter = () => {
  const data = useStaticQuery(graphql`
    query {
      ProjectCategory: allSanityProjectCategory {
        nodes {
          title
          id
        }
      }
    }
  `);
  const category = data.ProjectCategory.nodes;
  console.log(category);
  return (
    <ProjectSorterStyles>
      <ul>
        <li>
          <Link to="/work">All</Link>
        </li>
        {category.map((cat) => (
          <li key={cat.title}>
            <Link to={`/work/${cat.title}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>
    </ProjectSorterStyles>
  );
};

export default ProjectSorter;
