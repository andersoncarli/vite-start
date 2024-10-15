import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello component', () => {
  it('renders with the correct props', () => {
    render(<Hello who="World" />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});