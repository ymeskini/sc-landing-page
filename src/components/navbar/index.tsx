import { Link } from "gatsby";
import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";

import { Icon, IconName } from "../icon";
import Logo from "../../../static/images/logos/logo.svg";

const navLinks = [
  { label: "Courses", href: "/courses", icon: "courses" },
  { label: "Tutorials", href: "/tutorials", icon: "tutorials" },
  { label: "Pricing", href: "/pricing", icon: "pricing" },
  { label: "", href: "/search", icon: "search" },
  { label: "", href: "/account", icon: "account" },
] as const;

const MenuLink: FC<{
  href: string;
  icon: IconName;
  label?: string;
}> = ({ href, icon, label }) => {
  return (
    <ListElement
      style={
        {
          "--padding": label ? "10px" : "0",
        } as CSSProperties
      }
      role="none"
      key={href}
    >
      <StyledLink role="menuitem" to={href}>
        <Icon icon={icon} />
        <span>{label}</span>
      </StyledLink>
    </ListElement>
  );
};

export const Navbar = () => {
  return (
    <Wrapper aria-label="Design Code Navigation">
      <Link to="/">
        <StyledLogo />
      </Link>
      <List role="menubar">
        {navLinks.map((link) => (
          <MenuLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </List>
    </Wrapper>
  );
};

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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;

const ListElement = styled.li`
  display: flex;
  gap: 10px;
  padding-right: var(--padding);
  transition: 0.5s ease-out;
  border-radius: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2) inset,
      0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  top: 60px;
  position: absolute;
  padding: 0 30px;
`;
