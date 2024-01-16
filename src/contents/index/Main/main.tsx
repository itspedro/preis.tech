'use client';

import React from 'react';
import styled from 'styled-components';
import MainContent from './main-content';
import { addOpacity } from '@/utils/misc';
import MainCharacters from './main-random-character';

const MainRoot = styled.div.attrs({ className: 'bg-image' })`
  width: 100%;
  height: 800px;
  background: linear-gradient(360deg, transparent, ${props => addOpacity(props.theme.primary, 0.2)});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  &::before {
    mask-image: linear-gradient(to bottom, black 50%, transparent 60%);
    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 60%);
  };
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

function MainHome() {
  return (
    <MainRoot>
      <Container>
        <MainContent />
        <MainCharacters />
      </Container>
    </MainRoot>
  );
};

export default MainHome;