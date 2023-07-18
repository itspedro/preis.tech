import React from 'react';
import renderer from 'react-test-renderer';
import Main from '@/contents/index/Main/main';

describe('Main', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });  
});

