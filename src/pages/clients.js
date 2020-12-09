import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import WaveCTA from '../components/pageComponents/wave-cta';

const ClientStyles = styled.div`
  width: 100%;
  .client__grid {
    padding: 2rem 0;
    width: 70%;
    margin: 0 auto;
  }
`;
const Clients = ({ data }) => {
  const clients = data.clients.nodes;
  console.log(clients);
  return (
    <Layout>
      <AltPageHeader
        title="Clients"
        description="The amazing teams we work with."
      />
      <ClientStyles>
        <div className="client__grid">
          {clients.map((client) => (
            <SingleClient client={client} />
          ))}
        </div>
      </ClientStyles>
      <WaveCTA />
    </Layout>
  );
};

export default Clients;

const SingleClientStyles = styled.div`
  width: 100%;
  background: #f1f1f1;
  margin: 1rem 0;
  padding: 0;
  border-radius: 4.5px;
  .gatsby-image-wrapper {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
`;
const SingleClient = ({ client }) => (
  <SingleClientStyles>
    <Img fluid={client.clientLogo.asset.fluid} />
  </SingleClientStyles>
);

export const query = graphql`
  query MyQuery {
    clients: allSanityClients(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        name
        id
        _createdAt
        clientLogo {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
