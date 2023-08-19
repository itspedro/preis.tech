'use client';

import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../../../mdx-components';

const Container = styled.article`
  display: flex;
  text-align: justify;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    border-left: 1px solid ${props => props.theme.text20};
    padding-left: 20px;
  };

  @media (min-width: 1400px) {
    width: 40%
  };

  @media (max-width: 768px) {
    width: 90%;
  };

  h1 {
    font-family: inherit;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  };

  .autolink-header {
    color: ${props => props.theme.text};
    text-decoration: none;
    display: inline-block;
    margin-left: 5px;

    &:hover {
      color: ${props => props.theme.primary};
    };
  }

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  blockquote {
    font-size: 18px;
    font-style: italic;
    margin: 20px 0;
    padding: 0 10px;
    border-left: 5px solid ${props => props.theme.primary};
    background: ${props => props.theme.secondary};
    border-radius: 4px;
  };


  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    };
  };

  p {
    margin: 20px 0;
  };

  li {
    margin: 10px 0;
  };

  ul, ol {
    margin: 20px 0;
    padding-left: 20px;
  };

  code {
    font-size: 14px;
    background: ${props => props.theme.tertiary};
    padding: 5px;
    border-radius: 4px;
    color: #FFFFFF;
  };

  img {
    margin: 16px auto;
    border-radius: 4px;
  };

  iframe {
    max-width: 100%;
    margin: 16px auto;
    aspect-ratio: auto;
    border-radius: 4px;
  };

`

interface MDXstyleProps {
  slug: string
};

const components = useMDXComponents;

async function MDXstyle({ slug }: MDXstyleProps) {

  const MDXComponent = await import(`@/blogs/${slug}.mdx`);

  return (
    <Container>
      <MDXProvider components={components}>
        <MDXComponent.default />
      </MDXProvider>
    </Container>
  );
};

export default MDXstyle;