import React from "react";
import styled from "styled-components";

const MainNavigationLink = styled.a.attrs({
  href: "#",
  onClick: evt => {
    evt.preventDefault();
  }
})`
  align-items: center;
  color: #999999;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  padding: 0 10px;
  text-decoration: none;

  :hover {
    color: #dddddd;
  }
`;

const MainNavigationLinkCaret = styled.svg`
  fill: none;
  margin-left: 0.25em;

  path {
    stroke: currentColor;
  }
`;

const MainNavigationLinkDropdown = styled.div`
  background-color: #333333;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  :hover ${MainNavigationLinkDropdown} {
    display: block;
  }
`;

const MainNavigationLinkText = styled.span`
  line-height: 1;
`;

const MainNavigationItem = ({ dropdownContent, label }) => {
  return (
    <Wrapper>
      <MainNavigationLink>
        <MainNavigationLinkText>{label}</MainNavigationLinkText>
        <MainNavigationLinkCaret height="6" role="img" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.07223 5.1517L9.23083 1"></path>
        </MainNavigationLinkCaret>
      </MainNavigationLink>
      {dropdownContent && <MainNavigationLinkDropdown>{dropdownContent}</MainNavigationLinkDropdown>}
    </Wrapper>
  );
};

export default MainNavigationItem;
