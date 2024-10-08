import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../../../static/images/logos/logo.svg";
import { ListElement, MenuLink } from "./MenuLink";
import { Popover } from "../popover";

const navLinks = [
  { label: "Courses", href: "/course", icon: "courses" },
  { label: "Tutorials", href: "#", icon: "tutorials" },
  { label: "Pricing", href: "#", icon: "pricing" },
  { href: "#", icon: "search" },
] as const;

export const Navbar = () => {
  return (
    <Wrapper aria-label="Design Code Navigation">
      <Link to="/">
        <StyledLogo />
      </Link>
      <List role="menubar">
        {navLinks.map((link) => (
          <MenuLink {...link} key={link.icon} />
        ))}
        <Popover icon="account" />
      </List>
      <HamburgerWrapper>
        <Popover icon="hamburger" />
      </HamburgerWrapper>
    </Wrapper>
  );
};

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;

  @media (max-width: 760px) {
    width: 80px;
    height: 80px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  gap: 30px;
`;

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  top: 60px;
  position: absolute;
  padding: 0 30px;

  @media (max-width: 760px) {
    & ${List} > ${ListElement} {
      display: none;
    }
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
