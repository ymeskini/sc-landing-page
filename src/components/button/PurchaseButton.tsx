import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../icon";
import { Button } from ".";

export const PurchaseButton = () => (
  <StyledButton
    iconName="credit"
    text="Start learning"
    subText="120+ hours of video"
    extraElement={<StyledFloattingIcon icon="ring" size="large" />}
    iconProps={{
      id: "credit-icon",
      rounded: true,
      style: {
        padding: 8,
      },
    }}
  />
);

const StyledButton = styled(Button)`
  --icon-wrapper-background: linear-gradient(
    200deg,
    #4316db 13.57%,
    #9076e7 98.38%
  );
  --transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  width: 280px;
  transition: var(--transition);

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    #credit-icon {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
`;

const StyledFloattingIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5px;
  margin: auto;
  --size: 100px !important;
  background: transparent;
  transition: var(--transition);
  ${StyledButton}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;
