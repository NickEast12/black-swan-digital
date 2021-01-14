import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import SingleBlog from './singleBlog';

const PageBlogsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 1.5rem 0;
    .page__blogs {
      width: 80%;
      margin: 0 auto;
      .title--style {
        margin: 0.5rem 0;
        text-align: center;
      }
      h4 {
        text-align: center;
        text-transform: capitalize;
        font-size: 1.4rem;
        color: var(--background);
      }

      &__wrapper {
        a {
          text-decoration: none;
        }
      }
      &__btn {
        width: 100%;
        padding: 1rem 0;
        text-align: center;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .page__blogs {
      width: 80%;
      .title--style {
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (min-with: 414px) {
    .page__blogs {
      .title--style {
        font-size: 1.3rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 3rem 0;
    .page__blogs {
      .title--style {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1.7rem;
      }
      &__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .page__blogs {
      width: 75%;
      max-width: var(--maxBreakpoint);
      h4 {
        font-size: 34px;
      }
    }
  }
`;
const PageBlogs = ({ indexBlogs }) => (
  <PageBlogsStyles>
    <div className="page__blogs">
      <span className="title--style">Recent Articles</span>
      <h4>Latest news, data and tips from our team</h4>

      <div className="page__blogs__wrapper">
        {indexBlogs.map((blog) => (
          <SingleBlog key={blog.slug.current} blogData={blog} />
        ))}
      </div>
      <div className="page__blogs__btn">
        <Link to="/blogs">
          <button type="button">
            <span>Read more</span>
          </button>
        </Link>
      </div>
    </div>
  </PageBlogsStyles>
);

export default PageBlogs;
