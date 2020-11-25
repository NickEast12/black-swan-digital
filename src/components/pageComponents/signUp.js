import React from 'react';
import styled from 'styled-components';
// TODO - Needs Mail Chip Login in to connect the form

const SignUpStyles = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  background: var(--background);
  color: var(--offWhite);
`;

const SignUp = () => {
  const o = 'stay';
  return (
    <SignUpStyles>
      <h1>signup</h1>
    </SignUpStyles>
  );
};

export default SignUp;
