import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import App from './page';

describe('App', () => {
  it('renders App text', () => {
    render(createElement(App));

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
