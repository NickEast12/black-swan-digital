import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
//* Icons
import HeaderIcon from '../svgs/services-icon.svg';
import UXDesignIcon from '../svgs/web-design.svg';
import WebDevelopmentIcon from '../svgs/web-development.svg';
import ResponsiveDesignIcon from '../svgs/responsive-design.svg';
import DigitalMarketingIcon from '../svgs/digital-marketing.svg';
import Image from '../components/functional/Image';
import PageProjects from '../components/pageComponents/pageProjects';
import AnimateHeaderBackground from '../components/functional/animatedHeader';

const Services = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <ServicesHeader />
      <ServicesIntro />
      <ServicesBody />
      <PageProjects
        projects={projects}
        title="See for yourself"
        description="A selection of our most recent projects"
      />
      <WaveCTA />
    </Layout>
  );
};

export default Services;

const ServicesHeaderStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    position: relative;
    height: 100vh;
    .services-header-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .services__header {
      width: 90%;
      margin: 0 auto;
      color: var(--white);
      padding-top: 5rem;
      &__img {
        width: 75%;
        margin: 0 auto;
        svg {
          width: 100%;
        }
      }
      &__content {
        margin: 1.5rem auto;
        width: 90%;
        span {
          margin: 0;
          text-transform: uppercase;
          color: var(--mainColour);
          font-size: 1.2rem;
          letter-spacing: -0.1px;
        }
        h1 {
          font-size: 1.8rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .services__header {
      padding-top: 6rem;
    }
  }
`;
const ServicesHeader = () => (
  <ServicesHeaderStyles>
    <div className="services-header-wrapper">
      <div className="services__header">
        <div className="services__header__img">
          <HeaderIcon />
        </div>
        <div className="services__header__content">
          <span>Services</span>
          <h1>Our services include lots of good stuff</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
            natus ipsa illum recusandae totam!
          </p>
        </div>
      </div>
    </div>
    <AnimateHeaderBackground />
  </ServicesHeaderStyles>
);
const ServicesIntroStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    background: rgb(245, 245, 245);
    color: var(--background);
    padding: 2rem 0;
    .intro {
      width: 90%;
      margin: 0 auto;
      &__box {
        text-align: center;
        margin: 1rem auto;
        padding: 1rem 0;
        width: 80%;
        svg {
          fill: var(--background);
          width: 4rem;
        }
        h4 {
          margin: 0.5rem 0;
          color: var(--background);
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .intro {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
const ServicesIntro = () => (
  <ServicesIntroStyles>
    <div className="intro">
      <div className="intro__box">
        <WebDevelopmentIcon />
        <h4>Web Development</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
      <div className="intro__box">
        <UXDesignIcon />
        <h4>Branding &amp; Design</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
      <div className="intro__box">
        <ResponsiveDesignIcon />
        <h4>SEO</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
      <div className="intro__box">
        <DigitalMarketingIcon />
        <h4>Digital Marketing</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
    </div>
  </ServicesIntroStyles>
);

const ServicesBodyStyles = styled.div`
  width: 100%;
  padding: 2rem 0;
  .services__body {
    width: 90%;
    margin: 0 auto;
    &__box {
      margin: 1rem auto 2.5rem auto;
      width: 90%;

      section {
        .gatsby-image-wrapper {
          border-radius: 4.5px;
        }
      }
      aside {
        h4 {
          font-size: 1.6rem;
          margin: 1rem 0 0.5rem 0;
        }
        p {
          margin: 0.5rem 0;
        }
        h6 {
          margin: 1rem 0 0 0;
          font-size: 0.85rem;
          color: var(--offWhite);
          text-transform: uppercase;
        }
        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          /* @supports (gap: 5px) {
            gap: 5px;
          } */
          padding: 0.5rem 0;
          & > * {
            margin: 0 5px 5px 0;
          }
          li {
            background: linear-gradient(
              to right,
              var(--mainColour),
              var(--mainColourLighter)
            );
            border: solid 1px var(--mainColour);
            color: var(--white);
            border-radius: 4.5px;
            padding: 0.15rem 0.5rem;
            font-weight: 500;
          }
        }
      }
    }
    &--left {
    }
    &--right {
      section {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
`;
const ServicesBody = () => (
  <ServicesBodyStyles>
    <div className="services__body">
      <div className="services__body--left services__body__box">
        <section>
          <Image filename="about-us.jpg" alt="fill this in " />
        </section>
        <aside>
          <h4>Web Development</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            officia ut totam enim, blanditiis, ratione nam deleniti eius impedit
            tenetur unde optio excepturi accusamus debitis?
          </p>
          <h6>In-house capabilities</h6>
          <ul>
            <li>Wireframes</li>
            <li>Prototyping</li>
            <li>Graphics</li>
            <li>Logos</li>
          </ul>
        </aside>
      </div>
      <div className="services__body--right services__body__box">
        <section>
          <Image filename="about-us.jpg" alt="fill this in " />
        </section>
        <aside>
          <h4>Branding &amp; Design</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sunt
            ducimus fugit assumenda labore cum!
          </p>
          <h6>In-house capabilities</h6>
          <ul>
            <li>Web Design</li>
            <li>Web Design</li>
            <li>Web Design</li>
          </ul>
        </aside>
      </div>
      <div className="services__body--left services__body__box">
        <section>
          <Image filename="about-us.jpg" alt="fill this in " />
        </section>
        <aside>
          <h4>SEO</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sunt
            ducimus fugit assumenda labore cum!
          </p>
          <h6>In-house capabilities</h6>
          <ul>
            <li>Web Design</li>
            <li>Web Design</li>
            <li>Web Design</li>
          </ul>
        </aside>
      </div>
      <div className="services__body--right services__body__box">
        <section>
          <Image filename="about-us.jpg" alt="fill this in " />
        </section>
        <aside>
          <h4>Digital Marketing</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sunt
            ducimus fugit assumenda labore cum!
          </p>
          <h6>In-house capabilities</h6>
          <ul>
            <li>Web Design</li>
            <li>Web Design</li>
            <li>Web Design</li>
          </ul>
        </aside>
      </div>
    </div>
  </ServicesBodyStyles>
);

export const query = graphql`
  query {
    projects: allSanityProjects(
      sort: { fields: _createdAt, order: ASC }
      limit: 3
    ) {
      nodes {
        title
        id
        _createdAt
        slug {
          current
        }
        categories {
          id
          title
        }
        shortDescription
        projectImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
