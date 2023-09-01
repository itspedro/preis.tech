import { TProjectFrontMatter } from '@/types/types';
import styled from 'styled-components';
import { addOpacity } from '@/utils/misc';
import CustomImage from '../CustomImage';
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { GithubIcon } from '../icons/github-icon';
import Link from 'next/link';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: inherit;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${props => props.theme.tertiary};
  width: 350px;
  text-align: left;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textLight};
  transition: 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme.primary};
    box-shadow: ${props => addOpacity(props.theme.primary, 0.25)} 0px 50px 100px -20px, ${props => addOpacity(props.theme.tertiary, 0.3)}  0px 30px 60px -30px;
  }

  @media (max-width: 768px) {
    width: 300px;
  };
`

const LinkIconSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 10px;
  width: 50px;
  top: 20px;
  right: 20px;
`

const LinkIcon = styled(Link)`
  color: ${props => props.theme.icons};
  width: 20px;
  height: 20px;

  &:hover {
      color: ${props => props.theme.primary};
  };
`


const CardContent = styled.span`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h3`
  font-size: 22px;
  font-family: inherit;
`

const Description = styled.p`
  color: ${props => props.theme.text70};
  font-size: 14px;
  font-family: inherit;
`
const TagsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const Tag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.primary};
  background-color: ${addOpacity('#38817a', 0.2)};
  border-radius: 10px;
  padding: 5px 10px;
`

const ImageSection = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  max-height: 300px;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  };
`

interface CardProps {
  props: TProjectFrontMatter;
};

function CardComponent({ props }: CardProps) {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"] 
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <CardContainer
      ref={ref}
      style={{ 
        scale: scaleProgress ,
        opacity: scrollYProgress
      }}
    >
      <CardContent>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <TagsSection>
          {props.tech?.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagsSection>
        <LinkIconSection>
          <LinkIcon href={props.github} target="_blank">
            <GithubIcon />
          </LinkIcon>
          <LinkIcon href={props.external} target="_blank">
            <ExternalLinkIcon />
          </LinkIcon>
        </LinkIconSection>
        <ImageSection href={props.external} target="_blank">
        <CustomImage
          src={props.image}
          alt={props.title}
        />
      </ImageSection>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;