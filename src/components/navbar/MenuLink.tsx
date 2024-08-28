import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Icon, IconName } from "../icon";

export const MenuLink: FC<{
  href: string;
  icon: IconName;
  label?: string;
}> = ({ href, icon, label }) => {
  return (
    <ListElement role="none" key={href}>
      <StyledLink role="menuitem" to={href}>
        <Icon icon={icon} />
        {label && <Label>{label}</Label>}
      </StyledLink>
    </ListElement>
  );
};

const Label = styled.span`
  text-align: left;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  gap: 10px;
`;

export const ListElement = styled.li`
  display: flex;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2) inset,
      0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;
