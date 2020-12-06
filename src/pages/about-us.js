import React from 'react';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';

const AboutUs = () => {
  const i = 'stay';
  return (
    <Layout>
      <div className="about__body">
        <AltPageHeader
          title="About us"
          description="A tech-focused creative agency."
        />
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              iure vero omnis, nobis veritatis doloremque, esse eum rem eligendi
              quaerat autem sapiente ex excepturi. Deserunt consequatur maiores,
              labore, repellendus explicabo architecto, eligendi corporis nemo
              doloremque commodi exercitationem officia eaque vero!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
