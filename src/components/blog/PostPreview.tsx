import { TPostFrontMatter } from '@/types/blog';
import { addOpacity, formatTime, relativeTime } from '@/utils/misc';
import styled from 'styled-components';
import Link from 'next/link';

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: inherit;
  gap: 10px;
  padding: 20px;
  width: 60%;
  text-align: left;
  background-color: ${(props) => addOpacity(props.theme.secondary, 0.1)};
  border-bottom: 1px solid ${(props) => props.theme.text20};
  color: ${(props) => props.theme.textLight};
  transition: 0.2s;
  margin: 0 auto;
  margin-left: 35%;
  margin-bottom: 20px;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.primary};
    background-color: ${(props) => addOpacity(props.theme.secondary, 0.2)};
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-family: inherit;
`;

const Description = styled.p`
  color: ${(props) => props.theme.text70};
  font-size: 14px;
  font-family: inherit;
`;

const ReadMore = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  transition: 0.2s;
`;

interface PostPreviewProps {
  frontMatter: TPostFrontMatter;
  slug: string;
};

function PostPreview({ frontMatter, slug }: PostPreviewProps) {
  return (
    <CardContainer href={`/blog/${slug}`}>
      <Description>{formatTime(frontMatter.date)} - {relativeTime(frontMatter.date)}</Description>
      <Title>{frontMatter.title}</Title>
      <Description>{frontMatter.description}</Description>
      <ReadMore>Leia Mais &#10140;</ReadMore>
    </CardContainer>
  );
};

export default PostPreview;