'use client';

import React from 'react';
import styled from 'styled-components';
import MainContent from './main-content';
import { addOpacity } from '@/utils/misc';

const MainRoot = styled.div`
  width: 100%;
  height: 730px;
  background: linear-gradient(360deg, transparent, ${props => addOpacity(props.theme.primary, 0.2)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MainHome() {
  return (
    <MainRoot>
      <MainContent />
    </MainRoot>
  );
};

export default MainHome;