import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectSorter from '../components/functional/projectSorter';
import Layout from '../components/Layout';
import PageBlogs from '../components/pageComponents/pageBlogs';
import PageHeader from '../components/pageComponents/pageHeader';
import SingleProject from '../components/pageComponents/singleProject';
import WaveCTA from '../components/pageComponents/wave-cta';

const WorkStyles = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  .work {
    width: 80%;
    margin: 0 auto;
  }
`;
const Work = ({ data }) => {
  const projects = data.projects.nodes;
  const indexBlogs = data.indexBlogs.nodes;
  return (
    <Layout>
      <PageHeader page="Work" pageTitle="A selection of our work" />
      <WorkStyles>
        <ProjectSorter />
        <div className="work">
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </WorkStyles>
      <PageBlogs indexBlogs={indexBlogs} />
      <WaveCTA />
    </Layout>
  );
};

export default Work;

export const query = graphql`
  query($projectCategoryRegex: String) {
    projects: allSanityProjects(
      filter: {
        categories: { elemMatch: { title: { regex: $projectCategoryRegex } } }
      }
      sort: { fields: _createdAt, order: ASC }
    ) {
      nodes {
        title
        id
        _createdAt
        slug {
          current
        }
        categories {
          id
          title
        }
        textColour
        projectImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    indexBlogs: allSanityPost(
      sort: { fields: _createdAt, order: DESC }
      limit: 3
    ) {
      nodes {
        title
        excerpt
        _createdAt(formatString: "MMMM DD YYYY")
        slug {
          current
        }
        categories {
          title
          _id
        }
        author {
          name
          image {
            asset {
              fluid(maxWidth: 410) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        mainImage {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
