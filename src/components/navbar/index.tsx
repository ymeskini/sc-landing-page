import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../../../static/images/logos/logo.svg";
import { ListElement, MenuLink } from "./MenuLink";
import { MenuTooltip } from "../menu-tooltip";
import { Icon } from "../icon";

const navLinks = [
  { label: "Courses", href: "/courses", icon: "courses" },
  { label: "Tutorials", href: "/tutorials", icon: "tutorials" },
  { label: "Pricing", href: "/pricing", icon: "pricing" },
  { href: "/search", icon: "search" },
] as const;

const profileLinks = [
  {
    icon: "profile",
    label: "Profile",
    href: "/profile",
  },
  {
    icon: "settings",
    label: "Settings",
    href: "/settings",
  },
  {
    icon: "signout",
    label: "Sign out",
    href: "/signout",
  },
] as const;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper aria-label="Design Code Navigation">
      <Link to="/">
        <StyledLogo />
      </Link>
      <List role="menubar">
        {navLinks.map((link) => (
          <MenuLink {...link} />
        ))}
        <AccountButton onClick={() => setIsOpen((prev) => !prev)}>
          <Icon icon="account" />
        </AccountButton>
      </List>
      <MenuTooltip isOpen={isOpen} links={profileLinks} />
    </Wrapper>
  );
};

const AccountButton = styled(ListElement).attrs({ as: "button" })`
  border: none;
  background: transparent;
  padding-left: 0;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
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
`;
