import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const BlogSorterStyles = styled.ul`
  list-style: none;
  display: flex;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  padding: 2rem 0 0 0;
  @supports (gap: 10px) {
    gap: 10px;
  }
  @supports not (gap: 10px) {
    & > * {
      margin: 7px;
    }
  }
  /* @supports (gap: 10px) {
    gap: 10px;
  }
  grid-gap: 10px; */
  li {
    background: var(--mainColour);
    border-radius: 4.5px;
    flex-grow: 2;
    padding: 0.5rem;
    .blog__button {
      margin: 0;
      padding: 0;
      background: none;
      width: 100%;
      color: var(--white);
      span {
        background: var(--white);
        color: var(--background);
        border-radius: 4.5px;
        padding: 0.1rem 0.45rem;
        margin-left: 5px;
      }
      a {
        color: var(--white);
        text-decoration: none;
      }
    }
  }
`;
function CountBlogsInCategory(blogs) {
  //! Return pizzas with count
  const counts = blogs
    .map((blog) => blog.categories)
    .flat()
    .reduce((acc, cat) => {
      //* Check if its an existing topping
      const existingCat = acc[cat.id];
      if (existingCat) {
        //* increment by one if it exists
        existingCat.count += 1;
      } else {
        //* Otherwise create a new entry in our acc and set it to one
        acc[cat.id] = {
          id: cat.id,
          name: cat.title,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedBlogs = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedBlogs;
}

const BlogSorter = ({ activeCategory }) => {
  const { Categories, Blogs } = useStaticQuery(graphql`
    query {
      Categories: allSanityBlogCategory {
        edges {
          node {
            _id
            title
          }
        }
      }
      Blogs: allSanityPost {
        nodes {
          categories {
            title
            id
          }
        }
      }
    }
  `);
  const blogsWithCount = CountBlogsInCategory(Blogs.nodes);

  return (
    <BlogSorterStyles>
      <li>
        <Link to="/blogs">
          <button type="button" className="blog__button">
            All <span>{Blogs.nodes.length}</span>
          </button>
        </Link>
      </li>
      {blogsWithCount.map((blog) => (
        <li key={blog.id}>
          <button type="button" className="blog__button">
            <Link to={`/blogs/${blog.name}`}>
              {blog.name}
              <span>{blog.count}</span>
            </Link>
          </button>
        </li>
      ))}
    </BlogSorterStyles>
  );
};

export default BlogSorter;
