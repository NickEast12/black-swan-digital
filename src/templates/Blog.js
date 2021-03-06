import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
import SignUp from '../components/pageComponents/signUp';
import Bread from '../components/functional/Breadcrums';
import RelatedBlogs from '../components/pageComponents/relatedBlogs';

const urlFor = (source) =>
  urlBuilder({
    projectId: 'w336jm4g',
    dataset: 'production',
  }).image(source);

const BlogStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;

    .blog__header {
      width: 100%;
      padding: 6.5rem 0 2rem 0;
      position: relative;
      height: 25rem;
      &::after {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background: var(--background);
        z-index: -1;
        position: absolute;
        opacity: 0.25;
      }
      &__inner {
        width: 80%;
        margin: 0 auto;
        color: var(--white);
        z-index: 5;
        p {
        }
        h1 {
          margin: 0.5rem 0;
          font-size: 2.2rem;
        }
        &__author {
          display: grid;
          grid-template-columns: 60px 1fr;
          margin-top: 1rem;
          &__img {
            .gatsby-image-wrapper {
              border-radius: 50%;
              width: 50px;
              height: 50px;
            }
          }
          &__content {
            padding-top: 7.5px;
            h6 {
              color: var(--mainColour);
              font-weight: 500;
              font-size: 0.85rem;
              letter-spacing: -0.1px;
              text-transform: uppercase;
            }
          }
        }
      }
      &__background {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: -1;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
    .blog__body {
      padding: 2rem 0;
      &__inner {
        width: 80%;
        margin: 0 auto;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 1rem 0;
        }
        p {
          line-height: 1.45;
          font-size: 1.1rem;
          margin: 1.2rem 0;
        }
        ul {
          list-style: inside;
        }
        li {
          margin: 0.5rem 0;
          line-height: 1.45;
          font-size: 1.1rem;
        }
        a {
          color: var(--mainColour);
          font-weight: 800;
        }
        .image {
          width: 100%;
          text-align: center;
          margin: 2rem auto;
          img {
            height: auto;
            max-width: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .blog__header {
      padding: 8rem 0 0 0;
      height: 27rem;
    }
  }
  @media only screen and (min-width: 414px) {
    .blog__header {
      padding: 8.85rem 0 0 0;
      height: 29rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .blog__header {
      &__inner {
        width: 70%;
        padding: 1.25rem 0;
      }
    }
    .blog__body {
      &__inner {
        width: 70%;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .blog__header {
      &__inner {
        > h1 {
          font-size: 2.85rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .blog__header {
      height: 35rem;
      &__inner {
        max-width: var(--maxBreakpoint);
        padding-top: 4rem;
        > h1 {
          width: 80%;
        }
      }
    }
    .blog__body {
      &__inner {
        max-width: var(--maxBreakpoint);
      }
    }
  }
`;
const Blog = ({ data, pageContext }) => {
  const content = data.blog;
  const categoryData = data.Category;
  const serializers = {
    types: {
      image: (props) => (
        <div className="image">
          <img src={urlFor(props.node.asset)} alt="Blog Photos" />
        </div>
      ),
    },
  };
  return (
    <Layout>
      <BlogStyles>
        <div className="blog__header">
          <div className="blog__header__inner">
            <Bread breaddata={pageContext.breadcrumb} />
            <h1>{content.title}</h1>
            <aside className="blog__header__inner__author">
              <div className="blog__header__inner__author__img">
                <Img
                  fluid={content.author.image.asset.fluid}
                  alt={content.author.name}
                />
              </div>
              <div className="blog__header__inner__author__content">
                <h6>{content.author.name}</h6>
                <p>{content.publishedAt}</p>
              </div>
            </aside>
          </div>
          <div className="blog__header__background">
            <Img fluid={content.mainImage.asset.fluid} alt={content.title} />
          </div>
        </div>
        <div className="blog__body">
          <div className="blog__body__inner">
            <PortableText blocks={content._rawBody} serializers={serializers} />
          </div>
        </div>
      </BlogStyles>
      <SignUp alt />
      <RelatedBlogs blogData={categoryData} />
      <WaveCTA />
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query($slug: String!, $category: String!) {
    blog: sanityPost(slug: { current: { eq: $slug } }) {
      title
      subtitle
      slug {
        current
      }
      categories {
        title
      }
      publishedAt(formatString: "MMMM DD YYYY")
      author {
        name
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawBody

      mainImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    Category: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { eq: $category } } }
        slug: { current: { ne: $slug } }
      }
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
