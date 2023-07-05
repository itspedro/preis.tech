'use client';

import React from 'react';
import styled from 'styled-components';
import MainContent from './main-content';

const MainRoot = styled.div`
  width: 100%;
  height: 730px;

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