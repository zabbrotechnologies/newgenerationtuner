import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Mobile Chrome (iPhone 14 / Android)',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Tablet (iPad Mini)',
      use: { ...devices['iPad Mini'] },
    },
    {
      name: 'Desktop Chrome (1440x900)',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'Desktop UltraWide (1920x1080)',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
    }
  ],
});
