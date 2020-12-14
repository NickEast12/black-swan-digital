import React from 'react';
import Layout from '../../components/Layout';
import WaveCTA from '../../components/pageComponents/wave-cta';
import ImageLeftBlock from '../../components/projects-components/image-left-block';
import ImageRightBlock from '../../components/projects-components/image-right-block';
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
      <ImageRightBlock
        title="The Challenge"
        subtitle="Create a modern and clean UI that is responsive on all  screen sizes."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid iste quo rem, corrupti voluptatibus molestias, eligendi ex iure at, tempore commodi? Ipsam, aliquam dolor!"
      />
      <ImageLeftBlock
        title="The Solution"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid iste quo rem, corrupti voluptatibus molestias, eligendi ex iure at, tempore commodi? Ipsam, aliquam dolor!"
      />
      <WaveCTA />
    </div>
  </Layout>
);

export default VineStreet;
