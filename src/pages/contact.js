import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AltPageHeader from '../components/pageComponents/altPageHeader';

const ContactStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    padding: 1rem 0;
    .contact {
      width: 80%;
      margin: 0 auto;
      h3 {
        text-align: center;
        padding: 2rem 0;
        font-weight: 400;
        a {
          color: var(--mainColour);
        }
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        margin: 3rem 0;

        a {
          color: var(--mainColour);
          cursor: pointer;
          text-decoration: none;
        }
      }
      &__form {
        width: 100%;
        margin-top: 1rem;
        &__left {
          textarea {
            background: var(--background);
            color: var(--white);
            width: 100%;
            height: 10rem;
            border: none;
            resize: none;
            border-radius: 4.5px;
            padding: 1rem;
          }
        }
        &__right {
          input {
            width: 100%;
            background: var(--background);
            color: var(--white);
            border: solid 1px var(--background);
            border-radius: 4.5px;
            padding: 1rem;
            margin: 0.3rem 0;
          }
          &__btn {
            width: 100%;
            margin-top: 1rem;
            button {
              width: 100%;
              padding: 1rem;
              span {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .contact {
      width: 75%;
    }
  }
`;
const contact = () => {
  const i = 'stay';
  return (
    <Layout>
      <AltPageHeader
        title="Contact"
        description="Interested in working with us?"
      />
      <ContactStyles>
        <div className="contact">
          <h3>
            Simply fill out this form and we will be in touch,{' '}
            <a href="mailto:contact@nick-east.com">
              feel like sending us an email instead?
            </a>
          </h3>
          <div className="contact__form">
            <form action="">
              <div className="contact__form__left">
                <textarea
                  name="message"
                  id="message"
                  placeholder="About your project?"
                />
              </div>
              <div className="contact__form__right">
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="text" name="company" placeholder="Your company" />
                <div className="contact__form__right__btn">
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </form>
            <p>
              By contacting us you are agreeing to our{' '}
              <Link to="/privacy-policy"> Privacy Policy</Link>
            </p>
          </div>
        </div>
      </ContactStyles>
    </Layout>
  );
};

export default contact;
