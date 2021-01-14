import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const IndexAboutUsStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 3rem 0;
    section {
      width: 80%;
      margin: 0 auto;
      .about__img {
        width: 100%;
        margin: 0 auto;
        .gatsby-image-wrapper {
          border-radius: 4.5px;
        }
      }
      .about__content {
        width: 100%;
        margin: 1.5rem auto 0 auto;
        .title--style {
          margin: 1rem 0 0.5rem 0;
        }

        h3 {
          font-size: 1.6rem;
        }
        p {
          margin: 0.75rem 0;
          color: var(--background);
        }
        button {
          width: 150px;
          margin-top: 0.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    section {
      .about__img {
        .gatsby-image-wrapper {
          max-width: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .about__img {
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
      .about__content {
        margin-left: 2.5rem;
        h3 {
          font-size: 1.75rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 4rem 0;
    section {
      .about__img {
        width: 900px;
        height: 340px;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
      .about__content {
        margin-top: 0;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    section {
      width: 75%;
      padding: 2rem 0;
      .about__img {
      }
      .about__content {
        h3 {
          font-size: 34px;
        }
        p {
          width: 75%;
        }
      }
    }
  }
`;
const IndexAboutUs = () => (
  <IndexAboutUsStyles>
    <section>
      <div className="about__img">
        <Image filename="about-us.jpg" alt="The team at a meeting" />
      </div>
      <div className="about__content">
        <span className="title--style">About us</span>
        <h3>We are here to help you with</h3>
        <p>
          As a leading digital agency in London we offer a range of creative and
          development services to connect with your target audience. View our
          brand identity, web design, graphic design & development services
          below.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          debitis!
        </p>
        <button type="button">
          <span>Find out More</span>
        </button>
      </div>
    </section>
  </IndexAboutUsStyles>
);

export default IndexAboutUs;
