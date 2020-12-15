import React from 'react';
import styled from 'styled-components';

const PageHeaderStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    height: 60vh;
    background: var(--white);
    z-index: 0;
    .page__header {
      padding: 7.5rem 0;
      text-align: center;
      width: 80%;
      margin: 0 auto;
      p {
        color: var(--mainColour);
        font-weight: 600;
        font-size: 1.2rem;
        letter-spacing: -0.9px;
        text-transform: uppercase;
        margin: 1rem 0 0.5rem 0;
      }
      h1 {
        margin: 0;
        letter-spacing: -1px;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    height: 50vh;
    .page__header {
      width: 70%;
    }
  }
  @media only screen and (min-width: 414px) {
    height: 45vh;
  }
`;
const PageHeader = ({ page, pageTitle }) => (
  <PageHeaderStyles>
    <div className="page__header">
      <p>{page}</p>
      <h1>{pageTitle}</h1>
    </div>
  </PageHeaderStyles>
);

export default PageHeader;
