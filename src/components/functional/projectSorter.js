import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ProjectSorterStyles = styled.div`
  width: 100%;
  ul {
    width: 100%;
    margin: 2rem auto 0 auto;
    text-align: center;
    list-style: none;
    display: flex;
    justify-content: space-around;
    @supports (gap: 10px) {
      gap: 10px;
    }
    & > * + * {
      margin-left: 5px;
    }
    li {
      flex-grow: 2;
      background: var(--mainColour);
      border-radius: 4.5px;
      padding: 0.5rem 0;
      color: var(--white);
      a {
        color: inherit;
        font-weight: 400;
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
