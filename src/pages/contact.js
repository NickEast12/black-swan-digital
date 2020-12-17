import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AnimateHeaderBackground from '../components/functional/animatedHeader';
import Layout from '../components/Layout';

const ContactStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    .contact__wrapper {
      .contact__header {
        position: relative;
        height: 90vh;
        &__content {
          position: absolute;
          top: 0;
          left: 0;
          &__inner {
            width: 80%;
            margin: 0 auto;
            padding-top: 7.5rem;
            text-align: center;
            span {
              color: var(--mainColour);
              text-transform: uppercase;
              font-size: 1rem;
            }
            h1 {
              margin: 0.25rem 0 0 0;
              color: var(--white);
              font-size: 2rem;
            }
          }
        }
      }
      .contact__body {
        padding: 1rem 0;
        background: rgb(245, 245, 245);
        &__form {
          width: 80%;
          position: relative;
          z-index: 10;
          margin: -17.5rem auto 0 auto;
          p {
            text-align: center;
            color: var(--white);
            a {
              color: var(--mainColour);
              text-decoration: underline;
            }
          }
          form {
            margin: 1.5rem 0;
            padding: 2.5rem 2rem;
            background: var(--white);
            border-radius: 4.5px;
            label {
              letter-spacing: -0.5px;
              font-size: 0.9rem;
              display: block;
              text-transform: uppercase;
            }
            input {
              width: 100%;
              margin: 0.5rem 0;
              border-radius: 2.5px;
              border: 2px solid #e8e9ec;
              padding: 0.5rem;
            }
            textarea {
              margin: 0.5rem 0;
              width: 100%;
              height: 10rem;
              resize: vertical;
              border: 2px solid #e8e9ec;
              border-radius: 4.5px;
              padding: 0.5rem;
            }
            .btn {
              width: 70%;
              margin-top: 1rem;
              button {
                width: 100%;
                span {
                  text-transform: uppercase;
                }
              }
            }
          }
        }
        .legal {
          width: 80%;
          margin: 2rem auto;
          text-align: center;
          a {
            color: var(--mainColour);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .contact__wrapper {
      .contact__body {
        &__form {
          margin-top: -22rem;
        }
      }
    }
  }

  @media only screen and (min-width: 414px) {
    .contact__wrapper {
      .contact__header {
        &__content {
          span {
            font-size: 1.2rem;
          }
          h1 {
            font-size: 2.5rem;
          }
        }
      }
      .contact__body {
        &__form {
          margin-top: -24rem;
          form {
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
const contact = () => (
  <Layout>
    <ContactStyles>
      <div className="contact__wrapper">
        <div className="contact__header">
          <AnimateHeaderBackground />
          <div className="contact__header__content">
            <div className="contact__header__content__inner">
              <span>Contact</span>
              <h1>Interested in working with us?</h1>
            </div>
          </div>
        </div>
        <div className="contact__body">
          <div className="contact__body__form">
            <p>
              Simply fill out this form, or <a> send us an email.</a>
            </p>
            <form action="" className="form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <label htmlFor="company">Company</label>
              <input type="text" name="company" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" />
              <div className="btn">
                <button type="submit">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
          <p className="legal">
            By contacting us you are agreeing to our{' '}
            <Link to="/privacy-policy"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </ContactStyles>
  </Layout>
);

export default contact;
