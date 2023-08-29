'use client';

import styled from 'styled-components';
import PreviewSection from './Preview/preview';
import { TPostFrontMatter } from '@/types/types';
import { addOpacity } from '@/utils/misc';

const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, ${props => addOpacity(props.theme.primary, 0.2)} 35%, transparent 100%);
  flex-direction: column;
  margin: 0 auto;
  font-family: inherit;
  gap: 20px;
  padding: 200px 16px;
`

type SinglePost = {
  slug: string,
  frontMatter: TPostFrontMatter
};

interface BlogProps {
  posts: SinglePost[]
};

function BlogContent({ posts }: BlogProps) {
  return (
    <Container>
      <PreviewSection  posts={posts} />
    </Container>
  );
};

export default BlogContent;