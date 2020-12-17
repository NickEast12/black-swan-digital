import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectSorter from '../components/functional/projectSorter';
import Layout from '../components/Layout';
import PageBlogs from '../components/pageComponents/pageBlogs';
import SingleProject from '../components/pageComponents/singleProject';
import SorterPageHeader from '../components/pageComponents/sorterPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const WorkStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding-bottom: 2rem;
    .work__wrapper {
      width: 80%;
      margin: 0 auto;
    }
    .work {
      width: 100%;
    }
  }
  @media only screen and (min-width: 375px) {
    .work__wrapper {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 414px) {
    .work__wrapper {
      width: 80%;
    }
  }
`;
const Work = ({ data }) => {
  const projects = data.projects.nodes;
  const indexBlogs = data.indexBlogs.nodes;
  return (
    <Layout>
      <SorterPageHeader
        title="Work"
        description="A selection of our most recent work"
      >
        <ProjectSorter />
      </SorterPageHeader>
      <WorkStyles>
        <div className="work__wrapper">
          <div className="work">
            {projects.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
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
        shortDescription
        categories {
          id
          title
        }
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
