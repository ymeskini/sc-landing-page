import React, { FC, CSSProperties, ComponentProps } from "react";
import styled from "styled-components";

import CreditCardIcon from "../../../static/images/icons/credit.svg";
import RingIcon from "../../../static/images/icons/icon-ring.svg";
import CoursesIcon from "../../../static/images/icons/courses.svg";
import PricingIcon from "../../../static/images/icons/pricing.svg";
import TutorialsIcon from "../../../static/images/icons/tutorials.svg";
import AccountIcon from "../../../static/images/icons/account.svg";
import SearchIcon from "../../../static/images/icons/search.svg";

const iconMap = {
  credit: <CreditCardIcon />,
  ring: <RingIcon />,
  courses: <CoursesIcon />,
  pricing: <PricingIcon />,
  tutorials: <TutorialsIcon />,
  account: <AccountIcon />,
  search: <SearchIcon />,
};

export type IconName = keyof typeof iconMap;

const iconSizes = {
  small: 30,
  medium: 45,
  large: 100,
};

export interface IconProps extends ComponentProps<"div"> {
  icon: IconName;
  size?: keyof typeof iconSizes;
  iconWrapperBackground?: string;
}

const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  background: var(--icon-wrapper-background);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export const Icon: FC<IconProps> = ({
  icon,
  size,
  iconWrapperBackground,
  ...wrapperProps
}) => {
  const { style, ...rest } = wrapperProps;
  return (
    <IconWrapper
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
