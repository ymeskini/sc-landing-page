import React, { FC } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { SEO } from "../components/SEO";
import { BodyMain, H1 } from "../components/styles/TextStyles";

type SectionDataContext = {
  slug: string;
};

export const query = graphql`
  query SectionPage($slug: String!) {
    contentfulSection(slug: { eq: $slug }) {
      title
      description
      slug
      duration
      illustration {
        url
      }
    }
  }
`;

const SectionPage: FC<
  PageProps<Queries.SectionPageQuery, SectionDataContext>
> = ({ pageContext, data: { contentfulSection } }) => {
  return (
    <Wrapper>
      <HeroWrapper>
        {contentfulSection?.illustration?.url && (
          <Illustration
            src={contentfulSection.illustration.url}
            alt="Course Section Image"
          />
        )}
        <Title>{contentfulSection?.title}</Title>
        <Description>{contentfulSection?.description}</Description>
      </HeroWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #4316db 13%, #9076e7 98%);
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Illustration = styled.img``;

const Title = styled(H1)`
  max-width: 500px;
  margin: 0 auto;
  color: white;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`;

const Description = styled(BodyMain)`
  max-width: 600px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.7);
`;

export const Head: HeadFC<Queries.SectionPageQuery> = ({ data }) => (
  <SEO
    title={data.contentfulSection?.title || "Section"}
    description={data.contentfulSection?.description || "Section Description"}
    pathname={`/${data.contentfulSection?.slug}`}
  />
);

export default SectionPage;
