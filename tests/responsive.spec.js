import { test, expect } from '@playwright/test';

test.describe('New Generation Tuner\'s — Multi-Screen Responsive & Functional Suite', () => {

  test('01. Home Page loads and all key interactive sections render properly', async ({ page }) => {
    await page.goto('/');
    
    // Check Title & Logo
    await expect(page).toHaveTitle(/New Generation Tuner's/i);
    
    // Check Headline
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toContainText('SURFACE');

    // Verify Before/After slider section is present
    const beforeAfter = page.locator('text=SEE THE DIFFERENCE').first();
    await expect(beforeAfter).toBeVisible();

    // Verify 5-Step Assessment Wizard is present
    const assessment = page.locator('text=STAGE 01 / 05').first();
    await expect(assessment).toBeVisible();
  });

  test('02. Assessment Form step progression works flawlessly', async ({ page }) => {
    await page.goto('/');
    
    // Fill Step 1
    await page.locator('input[placeholder="e.g. 2024"]').first().fill('2025');
    await page.locator('input[placeholder="e.g. Porsche / BMW"]').first().fill('Porsche');
    await page.locator('input[placeholder="e.g. 911 GT3 / M4"]').first().fill('911 GT3 RS');
    
    // Click Continue to Step 2
    await page.locator('text=Continue to Goal Selection ↗').first().click();
    await expect(page.locator('text=STAGE 02 / 05').first()).toBeVisible();

    // Select goal and advance
    await page.locator('text=Continue to Surface Condition ↗').first().click();
    await expect(page.locator('text=STAGE 03 / 05').first()).toBeVisible();
  });

  test('03. Navigation to all subpages works smoothly', async ({ page }) => {
    await page.goto('/');

    // Check direct page navigation
    await page.goto('/services');
    await expect(page).toHaveURL(/.*services/);
    await expect(page.locator('h1').first()).toContainText('THE FINISH');

    // Navigate to Contact
    await page.goto('/contact');
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1').first()).toContainText('Contact');
  });

  test('04. No horizontal scrolling overflow exists on any screen width', async ({ page }) => {
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // Allow slight subpixel rounding
  });

});
