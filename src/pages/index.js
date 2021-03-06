import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
import PageBlogs from '../components/pageComponents/pageBlogs';
import SignUp from '../components/pageComponents/signUp';
import IndexAboutUs from '../components/pageComponents/indexAboutUs';
import IndexProjects from '../components/pageComponents/indexProjects';
import WaveHeader from '../components/pageComponents/waveHeader';
import AltServices from '../components/pageComponents/altServices';
import SEO from '../components/functional/SEO';
import BSDIcon from '../assets/images/icon.png';

const index = ({ data }) => {
  const indexBlogs = data.indexBlogs.nodes;
  const indexProject = data.projects.nodes;
  return (
    <Layout>
      <SEO
        title="Digital Marketing agency based in London, UK | Black Swan Digital"
        description="This is a short description to be used as a placeholder untill i come up with the real description"
        img={BSDIcon}
      />
      <div>
        <WaveHeader />
        <AltServices />
        {/* <IndexServices /> */}
        <IndexAboutUs />
        <IndexProjects indexProject={indexProject} />
        <SignUp />
        <PageBlogs indexBlogs={indexBlogs} />
        <WaveCTA />
      </div>
    </Layout>
  );
};

export default index;

export const query = graphql`
  query posts {
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
    projects: allSanityProjects(
      sort: { fields: _createdAt, order: DESC }
      limit: 3
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
        shortDescription
        projectImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
