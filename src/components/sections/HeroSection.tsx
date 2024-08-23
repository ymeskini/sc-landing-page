import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

import { H1, MediumText } from "../styles/TextStyles";
import { Button } from "../button";
import { Icon } from "../icon";
import { Mockup } from "../mockup";
import { WaveBackground } from "../backgrounds/WaveBackground";

export const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code <span>React</span> apps
          </Title>
          <Description>
            Don't skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <Link to="/page-2">
            <StyledButton
              iconName="credit"
              text="Start learning"
              subText="120+ hours of video"
              extraElement={<StyledFloattingIcon icon="ring" size="large" />}
              iconProps={{
                id: "credit-icon",
              }}
            />
          </Link>
        </TextWrapper>
        <Mockup />
      </ContentWrapper>
    </Wrapper>
  );
};

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`;

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
  top: -15px;
  left: -11px;
  background: transparent;
  transition: var(--transition);
  ${StyledButton}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  & > * {
    opacity: 0;
    animation: ${animation} 1s forwards;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled(H1)`
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled(MediumText)``;
