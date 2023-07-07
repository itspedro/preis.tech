'use client';

import styled from "styled-components";
import BlogPreview from "./preview";
import Link from "next/link";

interface Post {
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
  width: 70%;
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
      {posts.map((post, index) => {
        return(
          <Link href={`/blog/${post.slug}`} key={index}>
            <BlogPreview
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
            />
          </Link>
        );
      })}
    </Container>
  );
};

export default BlogContent;