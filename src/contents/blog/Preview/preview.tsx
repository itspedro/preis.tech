'use client';

import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../../components/page-title';
import { TPostFrontMatter } from '@/types/types';
import PostPreview from '@/components/blog/PostPreview';

const Root = styled.div.attrs({ className: 'bg-image' })`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  gap: 50px;
  height: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type SinglePost = {
  slug: string;
  frontMatter: TPostFrontMatter;
};
interface PreviewProps {
  posts: SinglePost[];
}

function PreviewSection({ posts }: PreviewProps) {
  return (
    <Root>
      <PageTitle
        title='Blog Pessoal'
        description='Aqui estão todos os artigos relacionados à projetos pessoais.'
      />
      <CardContainer>
        {posts.map((post) => (
          <PostPreview
            frontMatter={post.frontMatter}
            slug={post.slug}
            key={post.slug}
          />
        ))}
      </CardContainer>
    </Root>
  );
}

export default PreviewSection;
