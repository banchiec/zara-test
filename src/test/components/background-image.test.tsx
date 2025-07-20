import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BackgroundImage } from '../../components';
import '@testing-library/jest-dom';
import { MOCK_IMAGE } from '../mocks';

describe('BackgroundImage', () => {
  it('Should renders with correct background-image and role', () => {
    render(<BackgroundImage imageUrl={MOCK_IMAGE.url} alt={MOCK_IMAGE.alt} />);

    const div = screen.getByRole('img', { name: 'model background' });

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({
      backgroundImage: 'url(/assets/foto.jpg)',
    });
    expect(div).toHaveAttribute('aria-label', 'model background');
  });

  it('Should has correct CSS class for background block', () => {
    render(<BackgroundImage imageUrl={MOCK_IMAGE.url} alt={MOCK_IMAGE.alt} />);

    const div = screen.getByRole('img', { name: 'model background' });
    expect(div).toHaveClass('zara-image-background');
  });
});
