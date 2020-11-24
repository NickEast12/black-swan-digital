import React from 'react';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';

const index = () => (
  <Layout>
    <div>
      <p style={{ padding: '10rem 5rem' }}>page one</p>
    </div>
    <div>
      <WaveCTA />
    </div>
  </Layout>
);

export default index;
