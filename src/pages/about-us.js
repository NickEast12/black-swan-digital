import React from 'react';
import styled from 'styled-components';
import Image from '../components/functional/Image';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';
//* Icons
import TemplateIcon from '../svgs/medal.svg';

const AboutUsStyles = styled.div`
  width: 100%;
  .about {
    width: 80%;
    margin: 0 auto;
    &__intro {
      padding: 2rem 0;
      &__content {
        h2 {
          font-size: 1.85rem;
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1rem;
        }
      }
      &__img {
        .gatsby-image-wrapper {
          border-radius: 4.5px;
        }
      }
    }
    &__ethos {
      margin-top: 2rem;
      &__inner {
        h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .ethos__grid {
          padding: 2rem 0;
          display: grid;
          grid-gap: 1.5rem;
          grid-template-columns: repeat(2, 1fr);
          svg {
            width: 60px;
          }
          h5 {
            font-size: 1.4rem;
            margin: 0.85rem 0;
          }
          p {
            font-weight: 400;
          }
        }
      }
    }
  }
`;
const AboutUs = ({ pageContext }) => {
  const i = 'stay';
  return (
    <Layout>
      <div className="about__body">
        <AltPageHeader
          title="About us"
          description="A tech-focused creative agency."
          pageContext={pageContext}
        />
        <AboutUsStyles>
          <div className="about">
            <div className="about__intro">
              <div className="about__intro__content">
                <h2>Why us?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quisquam deserunt ratione et minus provident? Explicabo nam
                  nulla voluptates deleniti.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae illum sed, eos consectetur voluptatibus deserunt,
                  id impedit delectus deleniti quod nemo qui molestiae earum
                  voluptate nostrum! Porro quidem neque excepturi?
                </p>
              </div>
              <div className="about__intro__img">
                <Image filename="about-us.jpg" alt="The Black Swan Team" />
              </div>
            </div>
            <div className="about__ethos">
              <div className="about__ethos__inner">
                <h3>Our Ethos</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis, dicta?
                </p>
                <div className="ethos__grid">
                  <div className="ethos__grid__box">
                    <TemplateIcon />
                    <h5>Ethos 1</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe labore ut tempore quae perspiciatis quasi.
                    </p>
                  </div>
                  <div className="ethos__grid__box">
                    <TemplateIcon />
                    <h5>Ethos 2</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe labore ut tempore quae perspiciatis quasi.
                    </p>
                  </div>
                  <div className="ethos__grid__box">
                    <TemplateIcon />
                    <h5>Ethos 3</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe labore ut tempore quae perspiciatis quasi.
                    </p>
                  </div>
                  <div className="ethos__grid__box">
                    <TemplateIcon />
                    <h5>Ethos 4</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe labore ut tempore quae perspiciatis quasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AboutUsStyles>
        <WaveCTA />
      </div>
    </Layout>
  );
};

export default AboutUs;
