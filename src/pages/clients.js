import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import WaveCTA from '../components/pageComponents/wave-cta';
import AltPageHeader from '../components/pageComponents/altPageHeader';
import SignUp from '../components/pageComponents/signUp';

const ClientStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .client__grid {
      display: grid;
      padding: 2rem 0;
      width: 70%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 375px) {
    .client__grid {
      width: 60%;
    }
  }
  @media only screen and (min-width: 768px) {
    .client__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    .client__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 1280px) {
    .client__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
const Clients = ({ data, pageContext }) => {
  const clients = data.clients.nodes;
  console.log(clients);
  return (
    <Layout>
      <AltPageHeader
        title="Clients"
        description="The amazing teams we work with."
        pageContext={pageContext}
      />
      <ClientStyles>
        <div className="client__grid">
          {clients.map((client) => (
            <SingleClient key={client.id} client={client} />
          ))}
        </div>
      </ClientStyles>
      <SignUp alt />
      <WaveCTA />
    </Layout>
  );
};

export default Clients;

const SingleClientStyles = styled.div`
  @media only screen and (min-width: 0px) {
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
    @media only screen and (min-width: 1280px) {
      .gatsby-image-wrapper {
        height: 9rem;
      }
    }
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
