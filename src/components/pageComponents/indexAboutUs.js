import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';

const IndexAboutUsStyles = styled.div`
  width: 100%;
  padding: 3rem 0;
  section {
    width: 100%;
    .about__img {
      width: 80%;
      margin: 0 auto;
      .gatsby-image-wrapper {
        border-radius: 4.5px;
      }
    }
    .about__content {
      width: 80%;
      margin: 1.5rem auto 0 auto;
      > span {
        color: var(--mainColour);
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin: 1rem 0 0.5rem 0;
        display: block;
      }

      h4 {
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
`;
const IndexAboutUs = () => (
  <IndexAboutUsStyles>
    <section>
      <div className="about__img">
        <Image filename="about-us.jpg" alt="The team at a meeting" />
      </div>
      <div className="about__content">
        <span>About us</span>
        <h4>We are here to help you with</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          officia explicabo numquam veniam accusamus quibusdam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nulla, officia explicabo
          numquam veniam accusamus quibusdam.
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
