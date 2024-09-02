import React, { memo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionProps } from ".";

export const Circles = memo<SectionProps>(({ centerX, centerY }) => {
  return (
    <>
      <Circle1
        animate={{
          x: centerX / 2,
          y: centerY / 2,
        }}
      />
      <Circle2
        animate={{
          x: centerX / 3,
          y: centerY / 3,
        }}
      />
      <Circle3
        animate={{
          x: centerX / 5,
          y: centerY / 5,
        }}
      />
      <Circle4
        animate={{
          x: centerX / 6,
          y: centerY / 6,
        }}
      />
      <Circle5
        animate={{
          x: centerX / 3,
          y: centerY / 3,
        }}
      />
      <Circle6
        animate={{
          x: centerX / 8,
          y: centerY / 8,
        }}
      />
    </>
  );
});

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background-image: radial-gradient(#f29d8f, #f19097);
  opacity: 0.2;
`;

const Circle1 = styled(Circle)`
  transform: translatex(-50px) translateY(30px);
  top: 93px;
  left: 552px;
  width: 55px;
  height: 55px;
`;

const Circle2 = styled(Circle)`
  transform: translatex(50px) translateY(50px);
  top: 8px;
  left: 671px;
  width: 228px;
  height: 228px;
`;

const Circle3 = styled(Circle)`
  transform: translatex(100px) translateY(-50px);
  top: 96px;
  left: 838px;
  width: 104px;
  height: 104px;
`;

const Circle4 = styled(Circle)`
  transform: translatex(50px) translateY(50px);
  top: 23px;
  left: 1070px;
  width: 118px;
  height: 118px;
`;

const Circle5 = styled(Circle)`
  transform: translatex(50px) translateY(50px);
  top: 624px;
  left: 852px;
  width: 162px;
  height: 162px;
`;

const Circle6 = styled(Circle)`
  transform: translatex(50px) translateY(-50px);
  top: 714px;
  left: 965px;
  width: 79px;
  height: 79px;
`;
