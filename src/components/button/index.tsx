import React, { FC, ComponentProps } from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import { CreditCardIcon } from "../icons/CreditCardIcon";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  subText?: string;
  icon?: "credit";
}

export const Button: FC<ButtonProps> = ({ text, subText, ...buttonProps }) => {
  return (
    <Wrapper {...buttonProps}>
      <CreditCardIcon />
      <Title>{text}</Title>
      {subText && <Subtitle>{subText}</Subtitle>}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 12px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 20px 40px 0px rgba(23, 0, 102, 0.2),
    0px 0px 0px 0.5px rgba(255, 255, 255, 0.5) inset;
  width: fit-content;
  cursor: pointer;
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
  margin-top: 4px;
`;
