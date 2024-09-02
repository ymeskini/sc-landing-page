import React, { memo } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { SectionProps } from ".";

export const Shapes = memo<SectionProps>(({ centerX, centerY }) => {
  return (
    <Wrapper
      className="shapes"
      animate={{
        x: centerX / 2.5,
        y: centerY / 2.5,
      }}
    >
      <Shape />
      <Shape2 />
      <Shape3 />
      <Shape4 />
      <Shape5 />
      <Shape6 />
    </Wrapper>
  );
});

const Wrapper = styled(motion.div)`
  margin-left: 150px;
  z-index: 8;
  div {
    backdrop-filter: blur(40px) brightness(300%) saturate(200%);
  }
`;

const Shape = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 20px 10px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  transform: skew(33deg) rotateZ(4deg);
  transform-origin: top left;
  position: absolute;
  top: 228px;
  left: 277px;
  background: rgba(255, 198, 194, 0.4);
  backdrop-filter: blur(40px);
  z-index: 6;
`;

const GenericPanel = styled.div`
  width: 144px;
  height: 30px;
  border-radius: 15px 10px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  transform: skew(33deg) rotateZ(4deg);
  transform-origin: top left;
  position: absolute;
  backdrop-filter: blur(40px);
  z-index: 6;
`;

const Shape2 = styled(GenericPanel)`
  top: 293px;
  left: 344px;
  background: rgba(255, 198, 194, 0.4);
`;

const Shape3 = styled(GenericPanel)`
  top: 335px;
  left: 370px;
  background: rgba(204, 235, 230, 0.4);
`;

const Shape4 = styled(GenericPanel)`
  top: 377px;
  left: 390px;
  background: rgba(204, 235, 230, 0.4);
`;

const Shape5 = styled(GenericPanel)`
  top: 419px;
  left: 414px;
  background: rgba(204, 235, 230, 0.4);
`;

const Shape6 = styled(GenericPanel)`
  top: 460px;
  left: 438px;
  background: rgba(255, 198, 194, 0.4);
`;
