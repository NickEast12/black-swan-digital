import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SingleBlogStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    a {
      text-decoration: none;
    }
    .blog {
      border-radius: 4.5px;
      margin: 2rem 0;
      section {
        .gatsby-image-wrapper {
          height: 14rem;
          border-radius: 4.5px;
        }
      }
      aside {
        padding-top: 1.25rem;
        span {
          color: var(--mainColour);
          font-weight: 500;
          font-family: PoppinsLight;
          font-size: 1rem;
          letter-spacing: -0.1px;
          text-transform: uppercase;
        }
        h5 {
          font-size: 1.2rem;
          margin: 0.5rem 0;
          color: var(--background);
        }
        p {
          color: var(--background);
          margin-bottom: 0.5rem;
        }
        a {
          text-decoration: none;
          color: var(--mainColour);
          font-weight: 900;
        }
      }
      .author {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 60px 1fr;
        > section {
          .gatsby-image-wrapper {
            border-radius: 50%;
            width: 50px;
            height: 50px;
          }
        }
        > aside {
          padding-top: 6.5px;
          span {
            font-weight: 400;
            font-size: 1rem;
            letter-spacing: -0.25px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1280px) {
    .blog {
      section {
        .gatsby-image-wrapper {
          height: 15rem;
        }
      }
    }
  }
`;

const SingleBlog = ({ blogData }) => {
  const blog = blogData;
  return (
    <SingleBlogStyles>
      <Link key={blog.title} to={`/blogs/${blog.slug.current}`}>
        <div className="blog">
          <section>
            <Img fluid={blog.mainImage.asset.fluid} />
          </section>
          <aside>
            {blog.categories.map((i) => (
              <span key={i._id}>{i.title}</span>
            ))}
            <h5>{blog.title}</h5>
            <p>{blog.excerpt}</p>
            <div className="author">
              <section>
                <Img fluid={blog.author.image.asset.fluid} />
              </section>
              <aside>
                <span>{blog.author.name}</span>
                <p>{blog._createdAt}</p>
              </aside>
            </div>
          </aside>
        </div>
      </Link>
    </SingleBlogStyles>
  );
};

export default SingleBlog;
