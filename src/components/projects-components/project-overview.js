import React from 'react';
import styled from 'styled-components';

const ProjectOverviewStyles = styled.div`
  width: 100%;
  .wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    h3 {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .overview {
      &__boxes {
        width: 80%;
        margin: 0 auto 1rem auto;
        h5 {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--mainColour);
        }
        &__inner {
          text-align: center;
          padding: 3rem 0;
          border-radius: 4.5px;
          background: #f1f1f1;
          p {
            font-weight: 700;
            font-size: 1.1rem;
            letter-spacing: -1px;
          }
        }
      }
    }
  }
`;
const ProjectOverview = ({ industry, projectName, services, type }) => (
  <ProjectOverviewStyles>
    <div className="wrapper">
      <h3>Project Overview</h3>
      <div className="overview">
        <section className="overview__boxes">
          <h5>Industry</h5>
          <div className="overview__boxes__inner">
            <p>{industry}</p>
          </div>
        </section>
        <section className="overview__boxes">
          <h5>Project Name</h5>
          <div className="overview__boxes__inner">
            <p>{projectName}</p>
          </div>
        </section>
        <section className="overview__boxes">
          <h5>Services</h5>
          <div className="overview__boxes__inner">
            <p>{services}</p>
          </div>
        </section>
        <section className="overview__boxes">
          <h5>Type</h5>
          <div className="overview__boxes__inner">
            <p>{type}</p>
          </div>
        </section>
      </div>
    </div>
  </ProjectOverviewStyles>
);

export default ProjectOverview;
