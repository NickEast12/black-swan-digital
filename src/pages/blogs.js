import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogSorter from '../components/functional/blogSorter';
import Layout from '../components/Layout';
import BlogList from '../components/pageComponents/blogList';
import SmallerHeader from '../components/pageComponents/smallerHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const BlogStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .blogs {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 414px) {
    .blogs {
      width: 80%;
    }
  }
  @media only screen and (min-width: 768px) {
    .blogs {
      padding-top: 1.5rem;
      &__wrapper {
        .blogs__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .blogs {
      width: 75%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .blogs {
      width: 75%;
      max-width: var(--maxBreakpoint);
    }
  }
`;

const Blogs = ({ data, pageContext }) => {
  const blogs = data.BlogQuery.nodes;

  return (
    <Layout>
      <SmallerHeader
        title="Articles"
        description="Latest news, data and tips from our team"
        pageContext={pageContext}
      />
      <BlogStyles>
        <section className="blogs">
          <BlogSorter activeCategory={pageContext.title} />
          <div className="blogs__wrapper">
            <BlogList blogs={blogs} />
          </div>
        </section>
      </BlogStyles>
      <WaveCTA />
    </Layout>
  );
};

export default Blogs;

export const query = graphql`
  query Query($categoryRegex: String) {
    BlogQuery: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { regex: $categoryRegex } } }
      }
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        title
        subtitle
        id
        _createdAt(formatString: "MMMM DD YYYY")
        slug {
          current
        }
        excerpt
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
