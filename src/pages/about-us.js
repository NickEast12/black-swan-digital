import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';

const AboutUsStyles = styled.div`
  width: 100%;
  .about__inner {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;
const AboutUs = () => {
  const i = 'stay';
  return (
    <Layout>
      <div className="about__body">
        <AltPageHeader
          title="About us"
          description="A tech-focused creative agency."
        />
        <AboutUsStyles>
          <div className="about__inner">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              iure vero omnis, nobis veritatis doloremque, esse eum rem eligendi
              quaerat autem sapiente ex excepturi. Deserunt consequatur maiores,
              labore, repellendus explicabo architecto, eligendi corporis nemo
              doloremque commodi exercitationem officia eaque vero!
            </p>
          </div>
        </AboutUsStyles>
      </div>
    </Layout>
  );
};

export default AboutUs;
