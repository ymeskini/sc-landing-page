import React, { FC, CSSProperties, ComponentProps } from "react";
import styled from "styled-components";

import CreditCardIcon from "../../../static/images/icons/credit.svg";
import RingIcon from "../../../static/images/icons/icon-ring.svg";
import CoursesIcon from "../../../static/images/icons/courses.svg";
import PricingIcon from "../../../static/images/icons/pricing.svg";
import TutorialsIcon from "../../../static/images/icons/tutorials.svg";
import AccountIcon from "../../../static/images/icons/account.svg";
import SearchIcon from "../../../static/images/icons/search.svg";
import SettingsIcon from "../../../static/images/icons/settings.svg";
import SignoutIcon from "../../../static/images/icons/signout.svg";
import ProfileIcon from "../../../static/images/icons/profile.svg";
import HamburgerIcon from "../../../static/images/icons/hamburger.svg";
import ReactIcon from "../../../static/images/logos/react-logo.svg";

const iconMap = {
  credit: <CreditCardIcon />,
  ring: <RingIcon />,
  courses: <CoursesIcon />,
  pricing: <PricingIcon />,
  tutorials: <TutorialsIcon />,
  account: <AccountIcon />,
  search: <SearchIcon />,
  settings: <SettingsIcon />,
  signout: <SignoutIcon />,
  profile: <ProfileIcon />,
  hamburger: <HamburgerIcon />,
  react: <ReactIcon />,
};

export type IconName = keyof typeof iconMap;

const iconSizes = {
  small: 30,
  medium: 40,
  large: 60,
};

export interface IconProps extends ComponentProps<"div"> {
  icon: IconName;
  size?: keyof typeof iconSizes;
  iconWrapperBackground?: string;
  rounded?: boolean;
}

const IconWrapper = styled.div<{ $rounded: boolean }>`
  background: var(--icon-wrapper-background);
  display: flex;
  align-items: center;
  pointer-events: none;
  border-radius: ${({ $rounded }) => ($rounded ? "50%" : "0")};

  svg {
    width: var(--size);
    height: var(--size);
  }
`;

export const Icon: FC<IconProps> = ({
  icon,
  size,
  iconWrapperBackground,
  rounded,
  ...wrapperProps
}) => {
  const { style, ...rest } = wrapperProps;
  return (
    <IconWrapper
      $rounded={rounded || false}
      style={
        {
          "--size": `${iconSizes[size || "medium"]}px`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {iconMap[icon]}
    </IconWrapper>
  );
};
