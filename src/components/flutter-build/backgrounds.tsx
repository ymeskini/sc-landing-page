import React, { memo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionProps } from ".";

export const Backgrounds = memo<SectionProps>(({ centerX, centerY }) => {
  return (
    <>
      <Background3
        animate={{
          x: centerX / 5,
          y: centerY / 5,
        }}
        src="/images/components/flutter/background3.svg"
      />
      <Background2
        animate={{
          x: centerX / 6,
          y: centerY / 6,
        }}
        src="/images/components/flutter/background2.svg"
      />
      <Background1
        animate={{
          x: centerX / 7,
          y: centerY / 7,
        }}
        src="/images/components/flutter/background1.svg"
      />
    </>
  );
});

const Background = styled(motion.img)`
  position: absolute;
`;

const Background1 = styled(Background)`
  transform: translateY(40px);
  top: 80px;
  left: 29px;
  z-index: -1;
`;

const Background2 = styled(Background)`
  transform: translateY(-40px);
  top: 0px;
  left: 199px;
  z-index: 0;
  mix-blend-mode: darken;
`;

const Background3 = styled(Background)`
  transform: translatex(-50px) translateY(50px);
  top: -123px;
  left: 239px;
  z-index: 1;
  mix-blend-mode: overlay;
`;
