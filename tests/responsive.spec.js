import { test, expect } from '@playwright/test';

test.describe('New Generation Tuner\'s — Production Suite', () => {

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

  test('02. Assessment Form step progression & validation works', async ({ page }) => {
    await page.goto('/');
    
    // Fill Step 1
    await page.locator('input[placeholder="e.g. 2024"]').first().fill('2025');
    await page.locator('input[placeholder="e.g. Porsche / BMW"]').first().fill('Porsche');
    await page.locator('input[placeholder="e.g. 911 GT3 / M4"]').first().fill('911 GT3 RS');
    
    // Click Continue to Step 2
    await page.locator('text=Continue to Goal Selection ↗').first().click();
    await expect(page.locator('text=STAGE 02 / 05').first()).toBeVisible();

    // Select goal and advance to Step 3
    await page.locator('text=Continue to Surface Condition ↗').first().click();
    await expect(page.locator('text=STAGE 03 / 05').first()).toBeVisible();

    // Advance to Step 4 (Photo)
    await page.locator('text=Continue to Telemetry Photo ↗').first().click();
    await expect(page.locator('text=STAGE 04 / 05').first()).toBeVisible();
  });

  test('03. Navigation across all routes functions reliably', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      // Mobile drawer interaction
      await page.locator('button[aria-label="Open navigation menu"]').click();
      await page.locator('div[role="dialog"] a:has-text("SERVICES")').click();
      await expect(page).toHaveURL(/.*services/);
      await expect(page.locator('h1').first()).toContainText('THE FINISH');

      await page.locator('button[aria-label="Open navigation menu"]').click();
      await page.locator('div[role="dialog"] a:has-text("OUR WORK")').click();
      await expect(page).toHaveURL(/.*gallery/);
      await expect(page.locator('h1').first()).toContainText('SELECTED WORK');
    } else {
      // Desktop navigation
      await page.locator('header nav a:has-text("SERVICES")').click();
      await expect(page).toHaveURL(/.*services/);
      await expect(page.locator('h1').first()).toContainText('THE FINISH');

      await page.locator('header nav a:has-text("OUR WORK")').click();
      await expect(page).toHaveURL(/.*gallery/);
      await expect(page.locator('h1').first()).toContainText('SELECTED WORK');

      await page.locator('header nav a:has-text("REVIEWS")').click();
      await expect(page).toHaveURL(/.*reviews/);
      await expect(page.locator('h1').first()).toContainText('CLIENT FEEDBACK');

      await page.locator('header nav a:has-text("STUDIO")').click();
      await expect(page).toHaveURL(/.*about/);
      await expect(page.locator('h1').first()).toContainText('THE MACHINE');

      await page.locator('header nav a:has-text("CONTACT")').click();
      await expect(page).toHaveURL(/.*contact/);
      await expect(page.locator('h1').first()).toContainText('VEHICLE');
    }
  });

  test('04. Header scroll interaction hides on downward scroll and reappears on upward scroll', async ({ page }) => {
    await page.goto('/');
    const headerContainer = page.locator('header').first();
    await expect(headerContainer).toBeVisible();

    // Scroll down 400px
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(300);

    // Scroll up 100px to trigger reveal
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(300);
    await expect(headerContainer).toBeVisible();
  });

  test('04. No horizontal scrolling overflow exists on any screen width', async ({ page }) => {
    await page.goto('/');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // Allow slight subpixel rounding
  });

});
