import React from 'react';
import styled from 'styled-components';
import LiIcon from '../../assets/images/bs-li-icon.svg';

const ProjectOverviewStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .wrapper {
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
      h3 {
        text-align: left;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      &__box {
        padding: 0.85rem 0;
        h4 {
          font-size: 1.2rem;
        }
        ul {
          margin-top: 0.5rem;
          list-style: inside;

          li {
            margin: 0.45rem 0;
          }
        }
      }
    }
  }
`;
const ProjectOverview = ({ techArray, service, details }) => (
  <ProjectOverviewStyles>
    <div className="wrapper">
      <h3>Project Summary</h3>
      <div className="wrapper__box">
        <h4>Technology</h4>
        <ul>
          {techArray.map((arr) => (
            <li>{arr}</li>
          ))}
        </ul>
      </div>
      <div className="wrapper__box">
        <h4>Service</h4>
        <ul>
          <li>{service}</li>
        </ul>
      </div>
      <div className="wrapper__box">
        <h4>Client Details</h4>
        <p>{details}</p>
      </div>
    </div>
  </ProjectOverviewStyles>
);

export default ProjectOverview;
