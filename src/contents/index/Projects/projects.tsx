'use client';

import styled from 'styled-components';
import ProjectTitle from './project-title';
import CardComponent from '@/components/projects/Card';
import { TProjectFrontMatter } from '@/types/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  gap: 50px;
  height: fit-content;
  padding: 200px 0;

  @media (max-width: 962px) {
    width: 80%;
    margin: auto;
  };
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  };
  @media (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
  };
`

type ProjectContent = {
  project: string;
  frontMatter: TProjectFrontMatter;
};


interface ProjectContentProps {
  projects: ProjectContent[];
};

function ProjectSection({ projects }: ProjectContentProps) {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"] 
  });

  const animation = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  }


  return (
    <Root>
      <ProjectTitle />
      <CardContainer>
      {projects.map(({ frontMatter }, i) => (
        <CardComponent
          key={frontMatter.date}
          props={frontMatter}
        />
      ))}
      </CardContainer>
    </Root>
  );
};

export default ProjectSection;