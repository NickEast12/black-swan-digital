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

const Services = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <ServicesHeader />
      <ServicesIntro />
      <ServicesBody />
      <PageProjects
        projects={projects}
        title="See for yourself."
        description="A selection of our most recent projects."
      />
      <WaveCTA />
    </Layout>
  );
};

export default Services;

const ServicesHeaderStyles = styled.div`
  width: 100%;
  padding: 4rem 0 2rem 0;

  .services__header {
    width: 90%;
    margin: 2rem auto;
    &__img {
      width: 80%;

      margin: 0 auto;
      svg {
        width: 100%;
      }
    }
    &__content {
      margin: 1.5rem auto;
      width: 90%;
      h1 {
        margin: 0;
        text-transform: uppercase;
        color: var(--mainColour);
        font-size: 1.2rem;
        letter-spacing: -0.1px;
      }
      h2 {
        font-size: 1.6rem;
        margin: 0.5rem 0;
      }
    }
  }
`;
const ServicesHeader = () => (
  <ServicesHeaderStyles>
    <div className="services__header">
      <div className="services__header__img">
        <HeaderIcon />
      </div>
      <div className="services__header__content">
        <h1>Services</h1>
        <h2>Our services include lots of good stuff</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus vitae tenetur neque dolor libero iste consequatur
          consectetur itaque, animi fugit?
        </p>
      </div>
    </div>
  </ServicesHeaderStyles>
);
const ServicesIntroStyles = styled.div`
  width: 100%;
  background: var(--background);
  color: var(--white);
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
        fill: var(--white);
        width: 4rem;
      }
      h4 {
        margin: 0.5rem 0;
        color: var(--mainColour);
        font-size: 1.2rem;
      }
    }
  }
`;
const ServicesIntro = () => (
  <ServicesIntroStyles>
    <div className="intro">
      <div className="intro__box">
        <UXDesignIcon />
        <h4>UI/UX Design</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
      <div className="intro__box">
        <WebDevelopmentIcon />
        <h4>Web Development</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, odit?
        </p>
      </div>
      <div className="intro__box">
        <ResponsiveDesignIcon />
        <h4>Responsive Design</h4>
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
          gap: 0.5rem;
          padding: 0.5rem 0;
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
          <h4>UI/UX Design</h4>
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
          <h4>Web Development</h4>
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
          <h4>Responsive Design</h4>
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
