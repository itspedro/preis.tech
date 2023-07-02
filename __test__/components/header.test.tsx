import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/header';


describe('Header', () => {
  it('should render the header', () => {
    render(<Header />); 
    const logo = screen.getByText('</> preis');
    const dot = screen.getByText('tech');
    const button = screen.getByRole('button');
    expect(logo).toBeInTheDocument();
    expect(dot).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render the header items', () => {
    render(<Header />);
    const ArrNav = ['Blog', 'Portfólio'];
    ArrNav.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    }); 
  });
});