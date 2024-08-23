import React, { FC, forwardRef } from "react";
import styled, { css } from "styled-components";

import { MenuLink } from "../navbar/MenuLink";
import { IconName } from "../icon";

type MenuTooltipProps = {
  links: readonly { icon: IconName; label: string; href: string }[];
  isOpen: boolean;
};

export const MenuTooltip = forwardRef<HTMLDivElement, MenuTooltipProps>(
  ({ links, isOpen }, ref) => {
    return (
      <Wrapper ref={ref} $isOpen={isOpen}>
        <List>
          {links.map((link) => (
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
  }
);

const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Wrapper = styled.div<{ $isOpen: boolean }>`
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border: none;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  z-index: 1;
  transition: 0.3s ease-in-out;
  ${({ $isOpen }) => css`
    transform: ${$isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
    opacity: ${$isOpen ? 1 : 0};
    visibility: ${$isOpen ? "visible" : "hidden"};
  `}
`;
