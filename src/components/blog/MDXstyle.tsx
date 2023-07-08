'use client'

import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  font-family: inherit;
  padding: 10% 16px;
  font-weight: 400;
  line-height: 1.8;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20% 16px;
  };

  h1 {
    font-family: inherit;
    font-size: 32px;
    font-weight: 600;
  };

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
    width: 100%;
    height: auto;
    margin: 20px 0; 
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