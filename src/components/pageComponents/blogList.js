import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SingleBlog from './singleBlog';

const BlogGridStyles = styled.div``;

const BlogList = ({ blogs }) => (
  <BlogGridStyles className="blogs__grid">
    {blogs.map((blog) => (
      <SingleBlog key={blog.id} blogData={blog} />
    ))}
  </BlogGridStyles>
);

export default BlogList;
