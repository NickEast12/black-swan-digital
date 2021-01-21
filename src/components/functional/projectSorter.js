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
    flex-wrap: wrap;
    @supports (gap: 10px) {
      gap: 10px;
    }

    & > * {
      margin-left: 4.5px;
    }

    li {
      flex-grow: 2;
      background: var(--mainColour);
      border-radius: 4.5px;
      padding: 0.5rem;
      button {
        width: 100%;
        margin: 0;
        padding: 0;
        cursor: pointer;
        a {
          color: var(--white);
          width: 100%;
          font-weight: 400;
          text-decoration: none;
          font-size: 1rem;
        }
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
          <button type="button">
            <Link to="/case-studies">All</Link>
          </button>
        </li>

        {category.map((cat) => (
          <li key={cat.title}>
            <button type="button">
              <Link to={`/case-studies/${cat.title}`}>{cat.title}</Link>
            </button>
          </li>
        ))}
      </ul>
    </ProjectSorterStyles>
  );
};

export default ProjectSorter;
