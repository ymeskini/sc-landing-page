import React, { useState } from "react";
import styled from "styled-components";
import { MenuTooltip } from "../menu-tooltip";
import { Icon } from "../icon";
import { ListElement } from "../navbar/MenuLink";

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

export const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuTooltip isOpen={isOpen} links={profileLinks} />
      <AccountButton onClick={() => setIsOpen((prev) => !prev)}>
        <Icon icon="account" />
      </AccountButton>
    </>
  );
};

const AccountButton = styled(ListElement).attrs({ as: "button" })`
  border: none;
  background: transparent;
  padding-left: 0;
`;
