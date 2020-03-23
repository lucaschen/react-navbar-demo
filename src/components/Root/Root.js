import React from "react";
import styled from "styled-components";

import logo from "#root/assets/logo.png";
import placeholder from "#root/assets/placeholder.png";

import MainNavigationBox from "./MainNavigationBox";
import MainNavigationBoxExtras from "./MainNavigationBoxExtras";
import MainNavigationItem from "./MainNavigationItem";

const MainNavigation = styled.nav`
  align-items: center;
  background-color: #323232;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;
`;

const MainNavigationBoxes = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px 0 13px;
`;

const MainNavigationBoxesExtras = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainNavigationLogoLink = styled.a.attrs({
  href: "#",
  onClick: evt => {
    evt.preventDefault();
  }
})`
  display: flex;
  height: 100%;
  margin-right: 20px;
  transition: opacity 0.2s ease;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  > img {
    margin: auto;
  }
`;

const Root = () => {
  return (
    <MainNavigation>
      <MainNavigationLogoLink>
        <img src={logo} />
      </MainNavigationLogoLink>
      <MainNavigationItem
        dropdownContent={
          <MainNavigationBoxesExtras>
            <MainNavigationBoxes>
              <MainNavigationBox
                description="Get inspired with designs shared by our talented community"
                imageSrc={placeholder}
                title="Shots"
              />
              <MainNavigationBox
                description="Check out the rankings and see which designers are trending"
                imageSrc={placeholder}
                title="Top Designers"
              />
              <MainNavigationBox
                description="Amazing interviews with design industry leaders, tutorials, and more"
                imageSrc={placeholder}
                title="Blog"
              />
              <MainNavigationBox
                description="Join the fun and flex your design skills with our weekly prompt"
                imageSrc={placeholder}
                title="Weekly Warmup"
              />
              <MainNavigationBox
                description="See Shots that other designers are riffing on & participate yourself"
                imageSrc={placeholder}
                title="Playoffs"
              />
            </MainNavigationBoxes>
            <MainNavigationBoxExtras
              links={[
                {
                  label: "Teams",
                  to: "#"
                },
                {
                  label: "Goods for Sale",
                  to: "#"
                },
                {
                  label: "Meetups",
                  to: "#"
                },
                null,
                {
                  label: "Dribbble Shop",
                  to: "#"
                },
                {
                  label: "About Dribbble",
                  to: "#"
                },
                {
                  label: "Advertise",
                  to: "#"
                }
              ]}
            />
          </MainNavigationBoxesExtras>
        }
        label="Explore"
      />
      <MainNavigationItem label="For Designers" />
    </MainNavigation>
  );
};

export default Root;
