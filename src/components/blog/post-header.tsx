'use client';

import { LangIcon } from '@/components/icons/lang-icon';
import { formatTime } from '@/utils/misc';
import { styled } from 'styled-components';
import { DateIcon } from '@/components/icons/date-icon';

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  font-family: inherit;
  margin-bottom: 20px;
  font-weight: 400;
  padding-top: 10%;
  padding-bottom: 20px;

  @media (min-width: 1400px) {
    width: 40%;
  };

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

const Description = styled.h3`
  font-family: inherit;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.5;
  color: ${props => props.theme.text80};
  @media (max-width: 768px) {
    font-size: 16px;
  };
`

const LangSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  color: ${props => props.theme.text70};
`

const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.text70};
`

interface PostHeaderProps {
  title: string;
  description: string;
  date: string;
  lang: string;
};

function PostHeader (props: PostHeaderProps) {
    return (
        <ContentSection>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <LangSection>
              <DateIcon />
              <Span>
                {formatTime(props.date)}
              </Span>
              ·
              <LangIcon />
              <Span>
                {props.lang}
              </Span>
            </LangSection>
        </ContentSection>
    );
};

export default PostHeader;