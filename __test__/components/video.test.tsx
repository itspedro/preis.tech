import React from 'react';
import renderer from 'react-test-renderer';
import Video from '@/components/Video';
import { render, screen } from '@testing-library/react';

describe('Video', () => {
  it('should pass the videoID to the iframe', () => {
    render(<Video id="123" />);
    const iframe = screen.getByTestId('video');
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/123');
  });
});