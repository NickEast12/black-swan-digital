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
          width: 100%;
          margin: 0 auto;
          text-align: center;
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
          width: 90%;
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
            padding: 2rem;
            background: var(--white);
            border-radius: 4.5px;
            label {
              letter-spacing: -0.5px;
              font-size: 0.9rem;
              display: block;
              text-transform: uppercase;
              margin-top: 0.5rem;
            }
            input::placeholder {
              color: red;
            }
            input {
              -webkit-appearance: none;
              width: 100%;
              margin: 0.5rem 0;
              border-radius: 2.5px;
              border: 1px solid #e8e9ec;
              padding: 0.75rem 0.5rem;
              display: block;
            }
            textarea {
              -webkit-appearance: none;
              margin: 0.5rem 0;
              width: 100%;
              height: 15rem;
              resize: vertical;
              border: 1px solid #e8e9ec;
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
          width: 85%;
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
          width: 80%;
          margin-top: -26rem;
          form {
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .contact__wrapper {
      .contact__header {
        height: 70vh;
        &__content {
          &__inner {
            width: 50%;
          }
        }
      }
      .contact__body {
        &__form {
          margin-top: -20rem;
          width: 70%;
          div {
            display: flex;
            gap: 1rem;
            section {
              width: 100%;
              input {
                width: 100%;
              }
            }
          }
          form {
            .btn {
              width: 50%;
            }
          }
        }
        &__legal {
          width: 50%;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact__wrapper {
      .contact__header {
        height: 80vh;
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
              <div>
                <section>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Joe Blogs" />
                </section>
                <section>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="testing" />
                </section>
              </div>
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
