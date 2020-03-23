import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 30px 30px 17px;
  width: 146px;

  > div > a {
    color: white;
    display: block;
    font-weight: 500;
    padding: 9px 0;
    text-decoration: none;
  }

  > div > a:hover {
    color: #dddddd;
  }

  > div > hr {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

const MainNavigationBoxExtras = ({ links }) => {
  return (
    <Wrapper>
      <div>
        {links.map((linkOrSeparator, index) => {
          if (linkOrSeparator === null) {
            return <hr key={index} />;
          }
          return (
            <a href={linkOrSeparator.to} key={index}>
              {linkOrSeparator.label}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default MainNavigationBoxExtras;
