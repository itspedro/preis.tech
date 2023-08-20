'use client';

import { styled } from 'styled-components';
import { addOpacity } from '@/utils/misc';

const ContentSection = styled.section`
  display: flex;
  width: 50%;
  margin: 0 auto;
  font-family: inherit;
  margin-bottom: 20px;
  font-weight: 400;
  padding: 20px;
  color: ${props => props.theme.text70};

  @media (min-width: 1400px) {
    width: 40%;
  };

  @media (max-width: 768px) {
    width: 90%;
  };
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
  background-color: ${props => addOpacity(props.theme.primary, 0.4)};
  border-radius: 10px;
  padding: 3px;
`

interface PostFooterProps {
  tags: string[];
};

function PostFooter(props: PostFooterProps) {
    return (
        <ContentSection>
            <TagsSection>
            <span>tags: </span>
              {props.tags.map((tag, i) => {
                return <Tag key={i}>#{tag}</Tag>
              })}
            </TagsSection>
        </ContentSection>
    );
};

export default PostFooter;