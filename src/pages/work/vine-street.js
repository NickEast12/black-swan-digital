import React from 'react';
import Layout from '../../components/Layout';
import ProjectOverview from '../../components/projects-components/project-overview';
import ProjectHeader from '../../components/projects-components/projects-header';

const VineStreet = () => (
  <Layout>
    <div>
      <ProjectHeader
        title="Vine Street Solution"
        titleDescription="A new website for a leading managed print solution provider"
      />
    </div>
    <div>
      <ProjectOverview
        industry="Print Solutions"
        projectName="Vine Street"
        services="Design &amp; Development"
        type="Website"
      />
    </div>
  </Layout>
);

export default VineStreet;
