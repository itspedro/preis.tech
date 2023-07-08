'use client';

import CardComponent from '@/components/Card';
import React from 'react';
import styled from 'styled-components';
import PreviewTitle from './preview-title';
import { Post } from '../blog';
import Link from 'next/link';


const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  gap: 50px;
  height: 800px;


  @media (max-width: 768px) {
    width: 100%;
  };
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface PreviewProps {
  posts: Post[];
};


function PreviewSection({ posts }: PreviewProps) {
  return (
    <Root>

      <PreviewTitle />

      <CardContainer>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <CardComponent
              number={index + 1}
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
            />
          </Link>
        ))}
      </CardContainer>
    </Root>
  );
};

export default PreviewSection;