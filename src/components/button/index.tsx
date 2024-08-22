import React, { FC, ComponentProps } from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import { Icon, IconProps } from "../icon";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  subText?: string;
  iconName?: IconProps["icon"];
  iconProps?: Omit<IconProps, "icon">;
  extraElement?: JSX.Element;
}

export const Button: FC<ButtonProps> = ({
  text,
  subText,
  iconName,
  iconProps,
  extraElement,
  ...buttonProps
}) => {
  return (
    <Wrapper {...buttonProps}>
      {iconName && <Icon icon={iconName} {...iconProps} />}
      {extraElement}
      <TextWrapper>
        <Title>{text}</Title>
        {subText && <Subtitle>{subText}</Subtitle>}
      </TextWrapper>
    </Wrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Wrapper = styled.button`
  padding: 12px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 20px 40px 0px rgba(23, 0, 102, 0.2),
    0px 0px 0px 0.5px rgba(255, 255, 255, 0.5) inset;
  cursor: pointer;
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;
