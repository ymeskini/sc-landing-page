import React from "react";
import styled from "styled-components";

import { H1, MediumText } from "../styles/TextStyles";
import { Button } from "../button";
import { Link } from "gatsby";
import { Icon } from "../icon";

export const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code React apps
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
      </ContentWrapper>
    </Wrapper>
  );
};

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
  background: none;
  transition: var(--transition);
  ${StyledButton}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`;

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: var(--color-text);
`;

const Description = styled(MediumText)``;
