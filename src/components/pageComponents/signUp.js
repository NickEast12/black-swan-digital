import React from 'react';
import styled from 'styled-components';
// TODO - Needs Mail Chip Login in to connect the form

const SignUpStyles = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;
    background: var(--background);
    .signup__wrapper {
    }
    .altSignup {
      background: var(--white);
      .signup {
        color: var(--black);
        &__box {
          input {
            background: var(--background);
            border: none;
            color: var(--mainColour);
          }
          button {
            border: none;
          }
        }
      }
    }
    .signup {
      width: 80%;
      margin: 0 auto;
      padding: 3rem 1rem;
      color: var(--white);
      text-align: center;
      h5 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      p {
        margin-bottom: 0.5rem;
      }
      &__box {
        margin-top: 1rem;
        form {
          display: flex;
          flex-wrap: wrap;
          justify-content: stretch !important;
          border: none;
          background: none;
          input {
            width: 100%;
            padding: 0.5rem 0.5rem;
            border-radius: 4.5px;
            border: none;
          }
          button {
            width: 100%;
            border: none;
            margin-top: 1rem;
            background: var(--mainColour);
            span {
              color: var(--black);
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .signup {
      &__box {
        margin-top: 1.5rem;
        form {
          width: 100%;
          input {
            width: 75%;
            padding: 0.6rem 0.5rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          button {
            width: 25%;
            margin-top: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .signup__wrapper {
      h5 {
        font-size: 1.6rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .signup {
      width: 50%;
      padding: 5rem 0;
      h5 {
        font-size: 1.85rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .signup {
      padding: 6rem 0;
    }
  }
  @media only screen and (min-width: 1280px) {
    .signup {
      max-width: 700px;
    }
  }
`;

const SignUp = ({ alt }) => {
  const o = 'stay';
  return (
    <SignUpStyles>
      <div className={`signup__wrapper ${alt ? 'altSignup' : ''}`}>
        <div className={`signup `}>
          <h5>Sign up to our newsletter</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cupiditate, autem.
          </p>
          <div className="signup__box">
            <form action="">
              <input type="email" name="email" id="email" placeholder="Email" />
              <button type="submit">
                <span>Sign up</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SignUpStyles>
  );
};

export default SignUp;
