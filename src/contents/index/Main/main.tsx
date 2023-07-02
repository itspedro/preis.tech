'use client';

import React from 'react';
import styled from 'styled-components';
import MainContent from './main-content';

const MainRoot = styled.div`
  width: 100%;
  height: 730px;
  background-color: #FAFAE9;
  background-image: linear-gradient(360deg, white, rgba(255, 255, 255, 0));
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #0000002f 1px, rgba(0, 0, 0, 0) 1px);
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