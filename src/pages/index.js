import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
import PageBlogs from '../components/pageComponents/pageBlogs';
import SignUp from '../components/pageComponents/signUp';
import IndexAboutUs from '../components/pageComponents/indexAboutUs';
import IndexServices from '../components/pageComponents/indexServices';
import IndexProjects from '../components/pageComponents/indexProjects';
//* wave svg
import TopWave from '../assets/images/wave-top.svg';

const HomePageHeaderStyles = styled.div`
  width: 100%;
  height: 95vh;
  background-color: var(--background);
  /* background-image: linear-gradient(
    90deg,
    var(--mainColour),
    var(--mainColourLighter)
  ); */
  background-repeat: repeat-x;
  padding-top: 5rem;
  overflow: scroll;
  color: white;
  .wave {
    width: 100%;
    height: 4rem;
    position: absolute;
    left: 0;
    right: 0;
    /* bottom: -14.8rem; */
    bottom: 1rem;
    background-image: url(${TopWave});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    content: '';
    z-index: 50;
  }
  > div {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    p {
      margin: 0.5rem 0;
    }
    button {
      margin-top: 0.5rem;
      width: 120px;
    }
  }
`;

const index = ({ data }) => {
  const indexBlogs = data.indexBlogs.nodes;
  const indexProject = data.projects.nodes;
  return (
    <Layout>
      <HomePageHeaderStyles>
        <div>
          <h1>some text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsum
            nulla unde exercitationem recusandae culpa harum enim qui dolore
            quo.
          </p>
          <button type="button">
            <span>Find out more</span>
          </button>
          <div className="wave" />
        </div>
      </HomePageHeaderStyles>
      <div>
        <IndexServices />
        <IndexProjects indexProject={indexProject} />
        <IndexAboutUs />
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
      sort: { fields: _createdAt, order: ASC }
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
  }
`;
