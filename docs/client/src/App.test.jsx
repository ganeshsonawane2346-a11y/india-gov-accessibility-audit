import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('Public service directory', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ services: [{ id: '1', title: 'Document services', description: 'Find document-related services.', href: '#documents' }] }),
    }));
  });

  it('provides a skip link and a labelled search field', async () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    expect(screen.getByRole('searchbox', { name: /search services/i })).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: /document services/i })).toBeInTheDocument();
  });
});
