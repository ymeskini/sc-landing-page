import React, { FC } from "react";
import styled from "styled-components";
import { Caption, SmallText } from "../styles/TextStyles";

const formatTimestamp = (timestamp: string): string => {
  const [minutes, seconds] = timestamp.split(":").map(Number);
  return `${minutes}m ${seconds}s`;
};

export const SectionRow: FC<{
  index: number;
  title: string;
  description: string;
  duration: string;
}> = ({ description, index, duration, title }) => {
  const timestampAria = formatTimestamp(duration);
  const randomProgress = Math.floor(Math.random() * 100);
  return (
    <Wrapper>
      <Index>{index}</Index>
      <TextWrapper>
        <Title>{title}</Title>
        <ProgressBar
          value={randomProgress}
          max="100"
          aria-label={`Progress of the video at ${randomProgress}%`}
        />
        <Description>{description}</Description>
      </TextWrapper>
      <Timestamp dateTime={timestampAria}>{duration}</Timestamp>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 36px auto;
  gap: 10px;
  max-width: 100%;
  padding: 10px;
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  border-radius: 10px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: rgba(68, 66, 178, 0.1);
    box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
    cursor: pointer;
  }
`;

const Index = styled.div`
  height: 36px;
  width: 36px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  line-height: 24px;
  color: black;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  text-align: start;
  flex-direction: column;
`;

const Title = styled(Caption)`
  max-width: 180px;
`;

const ProgressBar = styled.progress`
  &[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 170px;
    height: 5px;
  }

  &::-webkit-progress-bar {
    border-radius: 8px;
    background: rgba(68, 66, 179, 0.1);
    background-blend-mode: overlay;
  }

  &::-webkit-progress-value {
    background-color: rgb(57, 19, 184);
    border-radius: 8px;
  }

  &::-moz-progress-bar {
    background-color: rgb(57, 19, 184);
  }
`;

const Description = styled(SmallText)`
  color: #192150;
`;

const Timestamp = styled.time`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  height: 20px;
  padding: 2px 6px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 16px;
  color: black;
`;
