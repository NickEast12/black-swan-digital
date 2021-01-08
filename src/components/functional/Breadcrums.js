import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Bready = styled.div`
  @media only screen and (min-width: 0px) {
    width: 100%;

    .breadcrumb {
      width: 100%;

      ul {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        li {
          font-weight: 500;
          font-size: 0.85rem;
          margin-right: 5px;
          text-transform: capitalize;
          &:nth-child(1) {
            a {
              color: var(--mainColour);
            }
          }
          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .breadcrumb {
      width: 90%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .breadcrumb {
      ul li {
        font-size: 0.95rem;
      }
    }
  }
`;

const Bread = ({ breaddata }) => {
  const elementsNew = [];
  breaddata.crumbs.forEach(createdBread);
  function createdBread(item) {
    const newlast = item.crumbLabel.replace(/-/g, ' ');
    elementsNew.push({ pathname: item.pathname, crumlabel: newlast });
  }
  // console.log(elementsNew)

  return (
    <>
      <Bready>
        <div className="breadcrumb">
          <ul>
            {elementsNew.map((value, index) => (
              <li key={index} className="breadcrumb__wrapper__inner">
                <Link key={index} to={`${value.pathname}`}>
                  {value.crumlabel} <span> / </span>{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Bready>
    </>
  );
};

export default Bread;
