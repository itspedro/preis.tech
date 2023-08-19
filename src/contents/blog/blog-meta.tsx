'use client';

import { styled } from 'styled-components';

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
  font-family: inherit;
  margin-bottom: 20px;
  font-weight: 400;
  padding-top: 10%;

  @media (max-width: 768px) {
    width: 90%;
    padding-top: 20%;
  };
`

const Title = styled.h1`
  font-family: inherit;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  };

`

const TagsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`

const Tag = styled.span`
  font-size: 12px;
  font-weight: 800;
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 20px;
  padding: 5px;
  transition: all 0.2s ease-in-out;
`

const DateSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  color: ${props => props.theme.text70};
`

interface MetaProps {
  title: string;
  date: string;
  tags: string[];
};

function MetaSection(props: MetaProps) {
    return (
        <ContentSection>
            <Title>{props.title}</Title>
            <TagsSection>
                {props.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </TagsSection>
            <DateSpan>{props.date}</DateSpan>
        </ContentSection>
    );
};

export default MetaSection;