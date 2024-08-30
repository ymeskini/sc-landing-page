import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMouseHovered } from "react-use";

export const FlutterBuild = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { elX, elY, elW, elH } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });

  const centerX = elX - elW / 2;
  const centerY = elY - elH / 2;

  return (
    <Wrapper ref={ref}>
      <motion.div
        animate={{
          rotateX: centerX / 20,
          rotateY: centerY / 20,
        }}
      >
        <motion.div
          className="shapes"
          animate={{
            translateX: centerX / 2.5,
            translateY: centerY / 2.5,
          }}
        >
          <div className="shape" />
          <div className="genericpanel shape2" />
          <div className="genericpanel shape3" />
          <div className="genericpanel shape4" />
          <div className="genericpanel shape5" />
          <div className="genericpanel shape6" />
        </motion.div>

        <motion.img
          className="man"
          animate={{
            translateX: centerX / 2,
            translateY: centerY / 2,
          }}
          src="/images/components/flutter/man.svg"
        />
        <motion.img
          className="phone-left"
          animate={{
            translateX: centerX / 2.5,
            translateY: centerY / 2.5,
          }}
          src="/images/components/flutter/iphone.png"
        />
        <motion.img
          className="phone-right"
          animate={{
            translateX: centerX / 3,
            translateY: centerY / 3,
          }}
          src="/images/components/flutter/pixel4.png"
        />
        <motion.div
          className="circle1"
          animate={{
            translateX: centerX / 2,
            translateY: centerY / 2,
          }}
        />
        <motion.div
          className="circle2"
          animate={{
            translateX: centerX / 3,
            translateY: centerY / 3,
          }}
        />
        <motion.div
          className="circle3"
          animate={{
            translateX: centerX / 5,
            translateY: centerY / 5,
          }}
        />
        <motion.div
          className="circle4"
          animate={{
            translateX: centerX / 6,
            translateY: centerY / 6,
          }}
        />
        <motion.div
          className="circle5"
          animate={{
            translateX: centerX / 3,
            translateY: centerY / 3,
          }}
        />
        <motion.div
          className="circle6"
          animate={{
            translateX: centerX / 8,
            translateY: centerY / 8,
          }}
        />
        <motion.img
          className="background3"
          animate={{
            translateX: centerX / 5,
            translateY: centerY / 5,
          }}
          src="/images/components/flutter/background3.svg"
        />
        <motion.img
          className="background2"
          animate={{
            translateX: centerX / 6,
            translateY: centerY / 6,
          }}
          src="/images/components/flutter/background2.svg"
        />
        <motion.img
          className="background1"
          animate={{
            translateX: centerX / 7,
            translateY: centerY / 7,
          }}
          src="/images/components/flutter/background1.svg"
        />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 900px;
  margin: 0 auto;
  animation: fadeIn 4s forwards;

  * {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }

  .shape {
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
  }
  .genericpanel {
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
  }
  .shape2 {
    top: 293px;
    left: 344px;
    background: rgba(255, 198, 194, 0.4);
  }
  .shape3 {
    top: 335px;
    left: 370px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape4 {
    top: 377px;
    left: 390px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape5 {
    top: 419px;
    left: 414px;
    background: rgba(204, 235, 230, 0.4);
  }
  .shape6 {
    top: 460px;
    left: 438px;
    background: rgba(255, 198, 194, 0.4);
  }
  .shape7 {
    width: 112px;
    height: 2px;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.5);
    transform: skew(33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    position: absolute;
    top: 484px;
    left: 793px;
    background: rgba(255, 198, 194, 0.4);
    backdrop-filter: blur(40px);
    z-index: 6;
  }
  .shape8 {
    width: 103px;
    height: 16px;
    position: absolute;
    top: 499px;
    left: 790px;
    border: 1px solid;
    border-radius: 15px 10px;
    border-color: rgba(255, 255, 255, 0.5);
    transform: skew(-33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    background: rgba(255, 198, 194, 0.4);
    backdrop-filter: blur(40px);
    z-index: 6;
  }
  .shape9 {
    width: 79px;
    height: 16px;
    position: absolute;
    top: 523px;
    left: 782px;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.5);
    transform: skew(-33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    background: rgba(255, 198, 194, 0.4);
    backdrop-filter: blur(40px);
    z-index: 6;
  }
  .shapes {
    margin-left: 150px;
    z-index: 8;
    div {
      backdrop-filter: blur(40px) brightness(300%) saturate(200%);
    }
  }

  .man {
    position: absolute;
    top: 110px;
    left: 500px;
    z-index: 7;
  }
  .phone-left {
    width: 427.47px;
    height: 465.28px;
    position: absolute;
    top: 168px;
    left: 198px;
    z-index: 1;
  }
  .phone-right {
    width: 427.47px;
    height: 465.96px;
    position: absolute;
    top: 152px;
    left: 705px;
    z-index: 2;
  }
  .layout-left {
    position: absolute;
    top: 168px;
    left: 200px;
    z-index: 4;
  }
  .layout-right {
    position: absolute;
    top: 200px;
    left: 700px;
    z-index: 3;
  }
  .background1 {
    position: absolute;
    top: 80px;
    left: 29px;
    z-index: -1;
  }
  .background2 {
    position: absolute;
    top: 0px;
    left: 199px;
    z-index: 0;
    mix-blend-mode: darken;
  }
  .background3 {
    position: absolute;
    top: -123px;
    left: 239px;
    z-index: 1;
    mix-blend-mode: overlay;
  }
  .circle1 {
    position: absolute;
    top: 93px;
    left: 552px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle2 {
    position: absolute;
    top: 8px;
    left: 671px;
    width: 228px;
    height: 228px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle3 {
    position: absolute;
    top: 96px;
    left: 838px;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle4 {
    position: absolute;
    top: 23px;
    left: 1070px;
    width: 118px;
    height: 118px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle5 {
    position: absolute;
    top: 624px;
    left: 852px;
    width: 162px;
    height: 162px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }
  .circle6 {
    position: absolute;
    top: 714px;
    left: 965px;
    width: 79px;
    height: 79px;
    border-radius: 50%;
    background-image: radial-gradient(#f29d8f, #f19097);
    opacity: 0.2;
  }

  .man {
    transform: translateY(-100px) translateX(-100px);
  }
  .phone-left {
    transform: translateY(100px);
  }
  .phone-right {
    transform: translateY(-100px);
  }
  .layout-left {
    transform: translateY(50px) translateX(50px);
  }
  .layout-right {
    transform: translateY(-100px) translateX(-50px);
  }
  .background1 {
    transform: translateY(40px);
  }
  .background2 {
    transform: translateY(-40px);
  }
  .background3 {
    transform: translatex(-50px) translateY(50px);
  }
  .circle1 {
    transform: translatex(-50px) translateY(30px);
  }
  .circle2 {
    transform: translatex(50px) translateY(50px);
  }
  .circle3 {
    transform: translatex(100px) translateY(-50px);
  }
  .circle4 {
    transform: translatex(50px) translateY(50px);
  }
  .circle5 {
    transform: translatex(50px) translateY(50px);
  }
  .circle6 {
    transform: translatex(50px) translateY(-50px);
  }
`;
