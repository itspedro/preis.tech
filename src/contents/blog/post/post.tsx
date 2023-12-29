'use client';

import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import MDXstyle from '@/components/notas/MDXstyle';
import PostFooter from '@/components/notas/post-footer';
import PostHeader from '@/components/notas/post-header';
import { TPostFrontMatter } from '@/types/types';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 150px;
`

interface PostProps {
  post: TPostFrontMatter,
  slug: string
};

function PostContent({ post, slug }: PostProps) {
  return (
    <>
      <Header />
      <Container>
        <PostHeader 
          title={post.title}
          description={post.description}
          date={post.date}
          lang={post.lang}
        />
        <MDXstyle slug={slug} />
        <PostFooter 
          tags={post.tags}
        />
      </Container>
      <Footer />
    </>
  );
};

export default PostContent;