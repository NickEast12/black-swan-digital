import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogSorter from '../components/functional/blogSorter';
import Layout from '../components/Layout';
import BlogList from '../components/pageComponents/blogList';
import PageHeader from '../components/pageComponents/pageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const BlogStyles = styled.div`
  width: 100%;
  .blogs {
    width: 80%;
    margin: 0 auto;
    &__wrapper {
      text-align: center;
    }
  }
`;

const Blogs = ({ data, pageContext }) => {
  const blogs = data.BlogQuery.nodes;
  return (
    <Layout>
      <PageHeader
        page="Articles"
        pageTitle="Latest news, data and tips from our team"
      />
      <BlogStyles>
        <section className="blogs">
          <div className="blogs__wrapper">
            <BlogSorter activeCategory={pageContext.title} />
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
