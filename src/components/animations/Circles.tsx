import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export const Circles = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Circle $isHovered={isHovered} />
      <Circle2 $isHovered={isHovered} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --circle-wrapper-size: 420px;
  width: var(--circle-wrapper-size);
  height: var(--circle-wrapper-size);
`;

const animation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

const Circle = styled.figure<{ $isHovered: boolean }>`
  position: absolute;
  width: var(--circle-wrapper-size);
  height: var(--circle-wrapper-size);
  background: linear-gradient(
    180deg,
    #9fe1ff 0%,
    rgba(195, 236, 255, 0.0853208) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 50%;
  left: calc(50% - var(--circle-wrapper-size) / 2);
  top: calc(50% - var(--circle-wrapper-size) / 2);
  animation: ${animation} 5s 1s linear forwards;
  animation-play-state: ${({ $isHovered }) =>
    $isHovered ? "running" : "paused"};
`;

const Circle2 = styled(Circle)`
  width: 260px;
  height: 260px;;
  border-radius: 50%;
  left: calc(50% - 260px / 2);
  top: calc(50% - 260px / 2);
`;
