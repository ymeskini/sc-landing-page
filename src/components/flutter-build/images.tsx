import React, { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionProps } from ".";

const ManImage = styled(motion.img)`
  position: absolute;
  top: 110px;
  left: 500px;
  z-index: 7;
`;

const PhoneLeftImage = styled(motion.img)`
  width: 430px;
  height: 465px;
  position: absolute;
  top: 170px;
  left: 200px;
  z-index: 1;
  transform: translateY(100px);
`;

const PhoneRightImage = styled(motion.img)`
  width: 430px;
  height: 465px;
  position: absolute;
  top: 150px;
  left: 700px;
  z-index: 2;
  transform: translateY(-100px);
`;

export const Images = memo<SectionProps>(({ centerX, centerY }) => {
  return (
    <>
      <ManImage
        animate={{
          x: centerX / 2,
          y: centerY / 2,
        }}
        src="/images/components/flutter/man.svg"
      />
      <PhoneLeftImage
        animate={{
          x: centerX / 2.5,
          y: centerY / 2.5,
        }}
        src="/images/components/flutter/iphone.png"
      />
      <PhoneRightImage
        animate={{
          x: centerX / 3,
          y: centerY / 3,
        }}
        src="/images/components/flutter/pixel4.png"
      />
    </>
  );
});
