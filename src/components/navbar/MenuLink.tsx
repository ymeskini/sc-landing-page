import React, { FC, CSSProperties } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Icon, IconName } from "../icon";

export const MenuLink: FC<{
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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;

export const ListElement = styled.li`
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
