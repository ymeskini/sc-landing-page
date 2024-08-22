import React, { FC, CSSProperties, ComponentProps } from "react";
import styled from "styled-components";

import CreditCardIcon from "../../images/icons/credit.svg";
import RingIcon from "../../images/icons/icon-ring.svg";

const iconMap = {
  credit: <CreditCardIcon />,
  ring: <RingIcon />,
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
