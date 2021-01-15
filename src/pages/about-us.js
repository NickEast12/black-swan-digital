import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Image from '../components/functional/Image';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';
//* Icons
import TemplateIcon from '../svgs/medal.svg';

const AboutUsStyles = styled.div`
  @media only screen and (min-width: 0px) {
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
          margin-top: 2rem;
          .gatsby-image-wrapper {
            border-radius: 4.5px;
          }
        }
      }
      &__ethos {
        margin-top: 2rem;
        &__inner {
          padding: 2rem 0;
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
  }
  @media only screen and (min-width: 768px) {
    .about {
      width: 80%;
      &__intro {
        padding-top: 4rem;
        display: grid;
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: 40% 1fr;
        grid-gap: 2rem;
        &__img {
          margin-top: 3rem;
        }
      }
      &__ethos {
        &__inner {
          .ethos__grid {
            display: grid;
            padding-top: 3rem;
            grid-template-columns: repeat(2, 1fr);
            /* grid-gap: 0.5rem; */
            gap: 1rem;
            justify-content: space-evenly;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .about {
      &__intro {
        &__img {
          margin-top: 0;
        }
      }
      &__ethos {
        &__inner {
          .ethos__grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .about {
      &__intro {
        max-width: var(--maxBreakpoint);
        margin: 0 auto;
        grid-gap: 7rem;
        &__content {
          padding-top: 5rem;
          h2 {
            font-size: 38px;
          }
        }
        &__img {
          .gatsby-image-wrapper {
            height: 400px;
            width: 100%;
          }
        }
      }
      &__ethos {
        max-width: var(--maxBreakpoint);
        margin: 0 auto;
        padding: 5rem 0;
        &__inner {
          h3 {
            font-size: 34px;
          }
        }
      }
    }
  }
`;
const TeamStyles = styled.div`
  @media only screen and (min-width: 0px) {
    @keyframes enter {
      to {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
    width: 100%;
    background: #0b0d0f;
    color: var(--white);
    .team {
      margin: 2rem auto 0 auto;
      padding: 3rem 0;
      width: 80%;
      &__inner {
        h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        p {
          margin-top: 0.5rem;
        }
        &__grid {
          width: 80%;
          margin: 0 auto;
          &__box {
            &:hover section {
              opacity: 1;

              h5 {
                animation: enter 0.85s 0.4s forwards;
              }
              p {
                animation: enter 1s 0.6s forwards;
              }
            }
            margin: 2rem 0;
            position: relative;
            height: 20rem;
            .gatsby-image-wrapper {
              filter: blur(3px);
              filter: grayscale(1);
              height: 100%;
              border-radius: 4.5px;
              width: 100%;
            }
            section {
              transition: all 0.3s ease;
              position: absolute;
              opacity: 0;
              border-radius: 4.5px;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(11, 13, 15, 0.55);
              .team__details {
                position: absolute;
                bottom: 1rem;
                left: 10px;
                h5 {
                  font-size: 1.2rem;
                  transform: translateY(10px);
                  opacity: 0;
                }
                p {
                  transform: translateY(10px);
                  opacity: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .team {
      padding: 6rem 0;
      &__inner {
        &__grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          &__box {
            height: 15rem;
            .gatsby-image-wrapper {
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .team {
      &__inner {
        &__grid {
          &__box {
            height: 20rem;
            .gatsby-image-wrapper {
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .team {
      max-width: var(--maxBreakpoint);
      &__inner {
        h3 {
          font-size: 34px;
        }
        p {
          width: 50%;
        }
        &__grid {
          &__box {
            height: 400px;
            .gatsby-image-wrapper {
              height: 100%;
            }
          }
        }
      }
    }
  }
`;
const AboutUs = ({ pageContext, data }) => {
  const team = data.team.nodes;
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
        <TeamStyles>
          <div className="team">
            <div className="team__inner">
              <h3>Our Team/Bevy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quos nobis distinctio incidunt, velit veritatis?
                Ad odit iusto illum. Vero!
              </p>
            </div>
            <div className="team__inner__grid">
              {team.map((i) => (
                <div className="team__inner__grid__box" key={i._id}>
                  <Img fluid={i.image.asset.fluid} alt={`image of ${i.name}`} />
                  <section>
                    <div className="team__details">
                      <h5>{i.name}</h5>
                      <p>{i.position}</p>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </TeamStyles>
        <WaveCTA alt />
      </div>
    </Layout>
  );
};

export default AboutUs;

export const query = graphql`
  query TeamQuery {
    team: allSanityAuthor {
      nodes {
        name
        _id
        _createdAt
        position
        bio
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
