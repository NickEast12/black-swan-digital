import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const PageBlogsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 1.5rem 0;
    .page__blogs {
      width: 80%;
      margin: 0 auto;
      h2 {
        font-size: 1.2rem;
      }
      h3 {
        text-align: center;
        text-transform: capitalize;
        font-size: 1.4rem;
        color: var(--background);
      }

      &__wrapper {
        a {
          text-decoration: none;
        }
        &__box {
          border-radius: 4.5px;
          margin: 2rem 0;
          > section {
            .gatsby-image-wrapper {
              height: 10rem;
              border-radius: 4.5px;
            }
          }
          > aside {
            padding-top: 1.25rem;
            h6 {
              color: var(--mainColour);
              font-weight: 700;
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
            > section {
              .gatsby-image-wrapper {
                border-radius: 50%;
                width: 50px;
                height: 50px;
              }
            }
            > aside {
              padding-top: 6.5px;
            }
          }
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
    }
  }
`;
const PageBlogs = ({ indexBlogs }) => (
  <PageBlogsStyles>
    <div className="page__blogs">
      <h2 className="title--style">Recent Articles</h2>
      <h3>Latest news, data and tips from our team</h3>
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
