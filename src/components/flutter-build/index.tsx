import React, { memo, useMemo, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMouseHovered } from "react-use";

import { Backgrounds } from "./backgrounds";
import { Circles } from "./circles";
import { Shapes } from "./shapes";
import { Images } from "./images";

export type SectionProps = {
  centerX: number;
  centerY: number;
};

const FlutterBuildC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { elX, elY, elW, elH } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });

  const centerX = useMemo(() => elX - elW / 2, [elX, elW]);
  const centerY = useMemo(() => elY - elH / 2, [elY, elH]);

  return (
    <Wrapper ref={ref}>
      <motion.div
        animate={{
          x: Math.max(0, Math.min(centerX, window.innerWidth)) / 20,
          y: centerY / 20,
        }}
      >
        <Shapes centerX={centerX} centerY={centerY} />
        <Images centerX={centerX} centerY={centerY} />
        <Circles centerX={centerX} centerY={centerY} />
        <Backgrounds centerX={centerX} centerY={centerY} />
      </motion.div>
    </Wrapper>
  );
};

export const FlutterBuild = memo(FlutterBuildC);

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 900px;
  margin: 0 auto;
  animation: fadeIn 4s forwards;

  & * {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }
`;
