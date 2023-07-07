'use client';

import { styled } from "styled-components";

interface BlogPreviewProps {
  title: string;
  description: string;
  date: string;
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.secondary};

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`

function BlogPreview({title, description, date}: BlogPreviewProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </Container>
  );
};

export default BlogPreview;