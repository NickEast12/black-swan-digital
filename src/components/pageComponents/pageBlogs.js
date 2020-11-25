import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Image from '../functional/Image';

const PageBlogsStyles = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  .page__blogs {
    width: 80%;
    margin: 0 auto;
    h3 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.4rem;
      color: var(--background);
    }
    hr {
      width: 190px;
      height: 4px;
      margin: 0 auto;
      border: none;
      background: var(--mainColour);
    }
    &__wrapper {
      a {
        text-decoration: none;
      }
      &__box {
        border-radius: 4.5px;
        margin: 2rem 0;
        section {
          .gatsby-image-wrapper {
            height: 10rem;
            border-top-left-radius: 4.5px;
            border-top-right-radius: 4.5px;
          }
        }
        aside {
          padding: 0.75rem;
          border: solid 1px var(--background);
          border-top: none;
          border-bottom-left-radius: 4.5px;
          border-bottom-right-radius: 4.5px;
          h6 {
            color: var(--mainColour);
            font-weight: 900;
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
      }
    }
  }
`;
const PageBlogs = ({ indexBlogs }) => {
  console.log(indexBlogs);
  return (
    <PageBlogsStyles>
      <div className="page__blogs">
        <h3>
          <b className="title-fea">Our latest articles</b>
        </h3>
        <div className="page__blogs__wrapper">
          {indexBlogs.map((blog) => (
            <Link key={blog.title} to={`/blogs/${blog.slug.current}`}>
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
                </aside>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageBlogsStyles>
  );
};

export default PageBlogs;
