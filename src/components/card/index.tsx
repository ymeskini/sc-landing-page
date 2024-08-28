import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Circles } from "../animations/Circles";

export const Card: FC<{ className?: string; image?: ReactNode }> = ({
  image,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <AnimationWrapper>
        <Circles />
      </AnimationWrapper>
      {image}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  height: 480px;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25),
    0px 30px 60px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(200deg, #ff8570 13.57%, #f9504a 98.35%);
`;

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  overflow: hidden;
  padding-top: 30px;
  mix-blend-mode: overlay;
  height: 100%;
`;
