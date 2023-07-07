'use client'

import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  font-family: inherit;
  padding: 200px 16px;
  font-weight: 400;
  line-height: 1.8;

  h1 {
    font-family: inherit;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 50px;
  };

  blockquote {
    font-size: 18px;
    font-style: italic;
    margin: 20px 0;
    padding: 10px;
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

  ol {
    margin: 20px 0;
    padding-left: 20px;
  };

  pre {
    font-size: 14px;
    background: ${props => props.theme.secondary};
    padding: 10px;
    border-radius: 4px;
    max-width: 700px;
  };

  code {
    font-size: 14px;
    background: ${props => props.theme.secondary};
    padding: 5px;
    border-radius: 4px;
  };

`

interface MDXstyleProps {
  children: React.ReactNode;
}

function MDXstyle({ children }: MDXstyleProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default MDXstyle;