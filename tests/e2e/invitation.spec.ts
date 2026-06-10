import { expect, test } from '@playwright/test';

test.describe('Wedding invitation experience', () => {
  test('loads the landing invitation and opens the celebration flow', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Wedding Invitation/i);
    await expect(page.getByRole('button', { name: /open the invitation/i })).toBeVisible();

    await page.getByRole('button', { name: /open the invitation/i }).click();
    await expect(page.getByRole('heading', { name: /Royal unveiling/i })).toBeVisible();

    const directionsLink = page.getByRole('link', { name: /open directions/i });
    await expect(directionsLink).toHaveAttribute('href', /google\.com/);
  });
});
