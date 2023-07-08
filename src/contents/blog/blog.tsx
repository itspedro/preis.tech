'use client';

import styled from 'styled-components';
import PreviewSection from './Preview/preview';
export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: inherit;
  gap: 20px;
  padding: 200px 16px;
`

interface BlogProps {
  posts: Post[];
};

function BlogContent({ posts }: BlogProps) {
  return (
    <Container>
      <PreviewSection  posts={posts} />
    </Container>
  );
};

export default BlogContent;