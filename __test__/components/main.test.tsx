import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../../src/contents/index/Main/main';

describe('Main', () => {
  it('should render component', () => {
    render(<Main />);
    
  });
});
