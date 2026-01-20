import { test, expect } from '@playwright/test';

test('counter increments in real browser', async ({ page }) => {
  await page.goto('/');

  await page.click('text=+');

  await expect(page.locator('span')).toHaveText('1');
});
