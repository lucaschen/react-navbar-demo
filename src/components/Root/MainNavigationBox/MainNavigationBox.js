import React from "react";
import styled from "styled-components";

const MainNavigationBoxDescription = styled.div`
  color: #bbbbbb;
  font-size: 13px;
`;

const MainNavigationBoxImage = styled.img`
  border-radius: 4px;
`;

const MainNavigationBoxTitle = styled.strong`
  color: white;
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  padding: 30px 17px;
  width: 146px;
`;

const MainNavigationBox = ({ description, imageSrc, title }) => {
  return (
    <Wrapper>
      <MainNavigationBoxImage src={imageSrc} />
      <MainNavigationBoxTitle>{title}</MainNavigationBoxTitle>
      <MainNavigationBoxDescription>{description}</MainNavigationBoxDescription>
    </Wrapper>
  );
};

export default MainNavigationBox;
