import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
import PageBlogs from '../components/pageComponents/pageBlogs';
import SignUp from '../components/pageComponents/signUp';

const index = ({ data }) => {
  const indexBlogs = data.indexBlogs.nodes;
  return (
    <Layout>
      <div>
        <p style={{ padding: '10rem 5rem' }}>page one</p>
      </div>
      <div>
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
        _createdAt
        slug {
          current
        }
        categories {
          title
          _id
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
