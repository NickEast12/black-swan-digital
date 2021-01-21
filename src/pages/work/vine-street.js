import React from 'react';
import Layout from '../../components/Layout';
import WaveCTA from '../../components/pageComponents/wave-cta';
import ImageLeftBlock from '../../components/projects-components/image-left-block';
import ImageLeftLarge from '../../components/projects-components/image-left-large';
import ImageRightBlock from '../../components/projects-components/image-right-block';
import ProjectOverview from '../../components/projects-components/project-overview';
import ProjectPageHeader from '../../components/projects-components/projectsPageHeader.js';

const VineStreet = ({ pageContext }) => {
  const techArray = ['Point  1', 'Point  2', 'Point  3'];
  return (
    <Layout>
      <ProjectPageHeader
        title="Vine Street Solutions"
        description="Digital strategy for a leading managed print solution provider"
        pageContext={pageContext}
        alt
      />
      <div>
        <ProjectOverview
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque molestiae dolor dignissimos est fugit veniam temporibus, dolore sequi quisquam?"
          techArray={techArray}
          service="Website Development"
        />
        <ImageRightBlock
          title="The Challenge"
          subtitle="Create a modern and clean UI that is responsive on all  screen sizes."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid iste quo rem, corrupti voluptatibus molestias, eligendi ex iure at, tempore commodi? Ipsam, aliquam dolor!"
          img="vs-mobile-mockup.png"
        />
        <ImageLeftBlock
          title="The Solution"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid iste quo rem, corrupti voluptatibus molestias, eligendi ex iure at, tempore commodi? Ipsam, aliquam dolor!"
          img="vs-ipad-mockup.png"
        />
        <ImageLeftLarge
          title="The Result"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid iste quo rem, corrupti voluptatibus molestias, eligendi ex iure at, tempore commodi? Ipsam, aliquam dolor!"
          img="vs-result.png"
          largeImage
        />
        <WaveCTA />
      </div>
    </Layout>
  );
};

export default VineStreet;
