import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MenuTooltip } from "../menu-tooltip";
import { Icon, IconName } from "../icon";
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

export const Popover: FC<{ icon: IconName }> = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const abortController = new AbortController();

    if (!isOpen) return;

    document.addEventListener(
      "mousedown",
      (e) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      },
      {
        signal: abortController.signal,
      }
    );

    return () => {
      abortController.abort();
    };
  }, [isOpen]);

  return (
    <>
      <MenuTooltip ref={menuRef} isOpen={isOpen} links={profileLinks} />
      <AccountButton
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
      >
        <Icon icon={icon} />
      </AccountButton>
    </>
  );
};

const AccountButton = styled(ListElement).attrs({ as: "button" })`
  border: none;
  background: transparent;
  padding-left: 0;
`;
