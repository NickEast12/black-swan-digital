import React from 'react';
import styled from 'styled-components';
import Image from '../components/functional/Image';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const AboutUsStyles = styled.div`
  width: 100%;
  .about__top {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
    &__content {
      padding-top: 1rem;
      h4 {
        color: var(--mainColour);
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
    }
    &__img {
      width: 90%;
      margin: 2rem auto;
      .gatsby-image-wrapper {
        border-radius: 4.5px;
        width: 100%;
      }
    }
  }
  .about__middle {
    background: var(--background);
    padding: 2rem 0;
    section {
      width: 90%;
      margin: 0 auto;
      color: var(--white);
      text-align: center;
      margin-bottom: 2rem;
      h4 {
        color: var(--mainColour);
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  .about__lower {
    padding: 2rem 0;
    section {
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
const AboutUs = () => {
  const i = 'stay';
  return (
    <Layout>
      <div className="about__body">
        <AltPageHeader
          title="About us"
          description="A tech-focused creative agency."
        />
        <AboutUsStyles>
          <div className="about__top">
            <div className="about__top__content">
              <h4>Black Swan Digital</h4>
              <h3>Our story</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                mollitia id adipisci itaque maiores reprehenderit fugit? Earum
                minima nobis quibusdam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                mollitia id adipisci itaque maiores reprehenderit fugit? Earum
                minima nobis quibusdam!
              </p>
            </div>
            <div className="about__top__img">
              <Image filename="about-us.jpg" alt="The Black Swan Team" />
            </div>
          </div>
          <div className="about__middle">
            <section>
              <h4>Cool thing about us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatibus placeat dolore similique? Dolorum
                cumque minus in commodi tenetur veniam.
              </p>
            </section>
            <section>
              <h4>Cool thing about us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatibus placeat dolore similique? Dolorum
                cumque minus in commodi tenetur veniam.
              </p>
            </section>
            <section>
              <h4>Cool thing about us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur voluptatibus placeat dolore similique? Dolorum
                cumque minus in commodi tenetur veniam.
              </p>
            </section>
          </div>
          <div className="about__lower">
            <section>
              <h5>this is some more cool text</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi maiores mollitia officia repellat unde, inventore animi
                exercitationem amet cumque laudantium vel quos, sapiente quis.
                Perferendis excepturi fugit cumque voluptatibus saepe!
              </p>
            </section>
          </div>
        </AboutUsStyles>
        <WaveCTA />
      </div>
    </Layout>
  );
};

export default AboutUs;
