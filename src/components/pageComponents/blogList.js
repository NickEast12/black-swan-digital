import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BlogGridStyles = styled.div``;

const SingleBlogStyles = styled.div`
  a {
    text-decoration: none;
    text-align: left;
  }
  border-radius: 4.5px;
  margin: 2rem 0;
  section {
    .gatsby-image-wrapper {
      height: 10rem;
      border-radius: 4.5px;
    }
  }
  aside {
    padding-top: 1.25rem;
    h6 {
      color: var(--mainColour);
      font-weight: 600;
      font-size: 0.85rem;
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
    section {
      .gatsby-image-wrapper {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    aside {
      padding-top: 6.5px;
    }
  }
`;
function SingleBlog({ blog }) {
  return (
    <SingleBlogStyles>
      <Link to={`/blogs/${blog.slug.current}`}>
        <div className="page__blogs__wrapper__box">
          <section>
            <Img fluid={blog.mainImage.asset.fluid} />
          </section>
          <aside>
            {blog.categories.map((cat) => (
              <h6 key={cat._id}>{cat.title}</h6>
            ))}
            <h5>{blog.title}</h5>
            <p>{blog.excerpt}</p>
            <div className="author">
              <section>
                <Img fluid={blog.author.image.asset.fluid} />
              </section>
              <aside>
                <h6>{blog.author.name}</h6>
                <p>{blog._createdAt}</p>
              </aside>
            </div>
          </aside>
        </div>
      </Link>
    </SingleBlogStyles>
  );
}
const BlogList = ({ blogs }) => (
  <BlogGridStyles>
    {blogs.map((blog) => (
      <SingleBlog key={blog.id} blog={blog} />
    ))}
  </BlogGridStyles>
);

export default BlogList;
