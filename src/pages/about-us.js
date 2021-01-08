import React from 'react';
import styled from 'styled-components';
import Image from '../components/functional/Image';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const AboutUsStyles = styled.div`
  width: 100%;
  .about {
    width: 90%;
    margin: 0 auto;
    &__top {
      margin: 3rem 0 1rem 0;
      &__img {
        height: 300px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0.5rem;
        grid-template-areas:
          'gallery-a gallery-b gallery-b'
          'gallery-a gallery-b gallery-b'
          'gallery-c gallery-c gallery-d';
        div {
          width: 100%;
          height: 100%;
          .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 4.5px;
          }
        }
        .gallery-a {
          grid-area: gallery-a;
        }
        .gallery-b {
          grid-area: gallery-b;
        }
        .gallery-c {
          grid-area: gallery-c;
        }
        .gallery-d {
          grid-area: gallery-d;
        }
      }
      &__content {
        padding: 1.25rem 0;
        text-align: center;
        h2 {
        }
        p {
          margin-top: 1rem;
        }
      }
    }
    &__middle {
      &__content {
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
            <div className="about__top">
              <div className="about__top__img">
                <div className="gallery-a">
                  <Image filename="about-us.jpg" alt="Photo" />
                </div>
                <div className="gallery-b">
                  <Image filename="about-us.jpg" alt="Photo" />
                </div>
                <div className="gallery-c">
                  <Image filename="about-us.jpg" alt="Photo" />
                </div>
                <div className="gallery-d">
                  <Image filename="about-us.jpg" alt="Photo" />
                </div>
              </div>
              <div className="about__top__content">
                <div className="about__top__content">
                  <h2>Our Company</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur facere vero commodi doloribus. Illo quaerat
                    sequi libero totam eius repellendus minima voluptatum aut
                    quo maiores.
                  </p>
                </div>
              </div>
            </div>
            <div className="about__middle">
              <div className="about__middle__content">
                <h3>Key Facts</h3>
                <div className="facts">
                  <div className="facts__box">
                    <i>Icon</i>
                    <h6>Fact 1 </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam sapiente repellat voluptate corporis inventore
                      dolorem.
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
