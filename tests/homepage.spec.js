import { test, expect } from '@playwright/test';

test('home page exposes accessible service search and results', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Public Service Directory' })).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search services' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Document services' })).toBeVisible();
});

test('skip link is reachable by keyboard', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
});
