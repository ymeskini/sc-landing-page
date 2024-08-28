import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import styled from "styled-components";

import { SEO } from "../components/SEO";
import { Icon } from "../components/icon";
import {
  BodyMain,
  Caption2,
  H1,
  SmallText,
} from "../components/styles/TextStyles";
import { PurchaseButton } from "../components/button/PurchaseButton";
import { Card } from "../components/card";
import { StaticImage } from "gatsby-plugin-image";

const CoursePage: React.FC<PageProps> = () => (
  <Wrapper>
    <HeroWrapper>
      <CourseCard
        image={
          <StaticImage
            alt="card image"
            src="../../static/images/illustrations/illustration-1.png"
          />
        }
      />
      <ContentWrapper>
        <Logo size="large" icon="react" />
        <Title>Build a web app with React Hooks</Title>
        <Subtitle>20 Sections - 3 hours of videos</Subtitle>
        <Description>
          Learn how to build the new DesignCode site with React Hooks
        </Description>
        <AuthorWrapper>
          <AuthorImage src="/images/avatars/Meng.png" alt="Author Image" />
          <Subtitle>Taught By Youssef Meskini</Subtitle>
        </AuthorWrapper>
        <PurchaseButton />
        <SmallDescription>
          Purchase includes access to 30 courses. Over 80 hours of content,
          including 12 hours for SwiftUI, for iOS 13 and iOS 14.
        </SmallDescription>
      </ContentWrapper>
    </HeroWrapper>
  </Wrapper>
);

const CourseCard = styled(Card)`
  margin-top: 40px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  background: linear-gradient(200deg, #4316db 13.57%, #9076e7 98.38%);
`;

const HeroWrapper = styled.div`
  padding: 200px 30px;
  display: flex;
  max-width: 1234px;
  gap: 60px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Subtitle = styled(Caption2)`
  color: var(--color-text-secondary);
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`;

const Logo = styled(Icon)``;
const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 760px) {
    justify-items: center;
    text-align: center;
  }
`;
const Description = styled(BodyMain)`
  max-width: 400px;
  color: white;
`;

const Title = styled(H1)`
  max-width: 500px;
  color: white;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`;

const SmallDescription = styled(SmallText)`
  max-width: 280px;
  color: var(--color-text-secondary);
`;

export default CoursePage;

export const Head: HeadFC = () => (
  <SEO
    title="Course"
    description="The best design and code resources on the web."
    pathname="/course"
  />
);
