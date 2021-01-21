import React from 'react';
import styled from 'styled-components';

const ProjectOverviewStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;

    .wrapper {
      width: 80%;
      margin: 0 auto;
      padding: 4rem 0 2rem 0;
      h3 {
        text-align: left;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      &__details {
        h4 {
          font-size: 1.5rem;
          margin-top: 2rem;
        }
        p {
          margin: 1rem 0;
        }
      }
      &__grid {
        &__box {
          padding: 0.85rem 0;
          h4 {
            font-size: 1.25rem;
          }
          ul {
            margin-top: 0.5rem;
            list-style: inside;

            li {
              margin: 0.25rem 0;
            }
          }
          p {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .wrapper {
      padding-bottom: 0;
      &__flex {
        display: grid;
        grid-template-columns: 55% 1fr;
        grid-gap: 1rem;
        padding: 2rem 0;
      }
      &__details {
        h4 {
          margin-top: 0;
        }
      }
      &__grid {
        padding-top: 0.5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.25rem;
        &__box {
          padding: 0;
        }
      }
    }
  }
`;
const ProjectOverview = ({ techArray, service, details }) => (
  <ProjectOverviewStyles>
    <div className="wrapper">
      <h3>Project Summary</h3>
      <div className="wrapper__flex">
        <div className="wrapper__details">
          <h4>Client Details</h4>
          <p>{details}</p>
        </div>
        <div className="wrapper__grid">
          <div className="wrapper__grid__box">
            <h4>Technology</h4>
            <ul>
              {techArray.map((arr) => (
                <li>{arr}</li>
              ))}
            </ul>
          </div>
          <div className="wrapper__grid__box">
            <h4>Service</h4>
            <ul>
              <li>{service}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ProjectOverviewStyles>
);

export default ProjectOverview;
