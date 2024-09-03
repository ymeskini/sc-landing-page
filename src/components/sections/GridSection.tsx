import React, { FC } from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";
import { SectionRow } from "./GridSectionRow";

type CourseSections =
  Queries.CoursePageQuery["allContentfulCourse"]["edges"][number]["node"]["sections"];

export const GridSection: FC<{ sections: CourseSections }> = ({ sections }) => {
  return (
    <Wrapper>
      <Title>20 topics</Title>
      <Description>
        All techniques are explained step-by-step, in a beginner-friendly so you
        can easily follow in a cohesive way.
      </Description>
      <Grid>
        {sections?.map(
          (section, index) =>
            section && (
              <SectionRow
                key={section?.title || index}
                title={section.title!}
                description={section.description!}
                duration={section.duration!}
                slug={section.slug!}
                index={index + 1}
              />
            )
        )}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  max-width: 1234px;
  margin: 0 auto;
  text-align: center;
  gap: 12px;
  padding: 0 20px;
`;
const Title = styled(Caption2)`
  color: white;
`;
const Description = styled(SmallText)`
  max-width: 400px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
`;

const Grid = styled.ol`
  list-style: none;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
`;
