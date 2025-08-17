import { test, expect } from '@playwright/test';

test('Search hotels in New York (mock)', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');

  await page.waitForSelector('#destination-input');
  await page.fill('#destination-input', 'New York');
  await page.click('#autocomplete-result');

  await expect(page.locator('#results')).toContainText('Hotels in New York');
  await expect(page.locator('#subtitle')).toHaveText('Mock Booking UI');

});
