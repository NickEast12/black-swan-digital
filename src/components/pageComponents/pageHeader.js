import React from 'react';
import styled from 'styled-components';

const PageHeaderStyles = styled.div`
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
      letter-spacing: -0.1px;
      text-transform: uppercase;
      margin: 1rem 0 0.5rem 0;
    }
    h1 {
      margin: 0;
    }
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
