'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-color: transparent; 
  background-size: 40px 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23C4C4C433' stroke-dasharray='5 3' transform='scale(1, -1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    mask-image: radial-gradient(ellipse, black 10%, transparent 40%);
    -webkit-mask-image: radial-gradient(ellipse, black 10%, transparent 40%);
    z-index: -2;
  };
  
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;
  color: ${props => props.theme.textLight};
`

const Content = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.text70};
  margin: 20px 0;
  text-align: center;
`

const TextAnchor = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primary};

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.textBold}
  }
`

export function NotFoundContents() {
  return (
    <Container>
      <Title>404</Title>
      <Content>
        Esta página não existe ou foi removida.
      </Content>
      <TextAnchor href="/">
        Clique para voltar a página inicial
      </TextAnchor>
    </Container>
  );
};

export function NotFoundBlogContents() {
  return (
    <Container>
      <Title>😓</Title>
      <Content>
        Este post não existe ou foi removido.
      </Content>
      <TextAnchor href="/notas">
        Todos os posts
      </TextAnchor>
    </Container>
  );
};