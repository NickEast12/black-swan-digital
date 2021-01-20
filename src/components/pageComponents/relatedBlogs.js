import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SingleBlog from './singleBlog';

const RelatedBlogsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .empty {
      display: none;
    }
    .related {
      width: 80%;
      margin: 2rem auto;
      > h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      > p {
        text-align: center;
        padding-bottom: 1rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .related {
      max-width: 1000px;
      &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
      }
    }
  }
`;
const RelatedBlogs = ({ blogData }) => {
  const blogs = blogData.nodes;
  return (
    <RelatedBlogsStyles>
      <div className={`related ${blogs.length === 0 ? 'empty' : ''}`}>
        <h3>Fancy reading some more?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, aliquid.
        </p>
        <div className="related__grid">
          {blogs.map((blog) => (
            <SingleBlog key={blog.slug.current} blogData={blog} />
          ))}
        </div>
      </div>
    </RelatedBlogsStyles>
  );
};

export default RelatedBlogs;
