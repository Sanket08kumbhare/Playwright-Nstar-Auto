import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-');
}

const timestamp = getTimestamp();

const testDir = defineBddConfig({
  features: 'Playwright/features/*.feature',
  steps: 'Playwright/steps/*.ts',
  importTestFrom: 'Playwright/utility/fixtures.ts'
});

export default defineConfig({
  testDir,
  timeout: 90000,
  
  outputDir: `test-results/${timestamp}`,     // ✅ Store videos, screenshots, traces here
  
  // reporter: [
  //   ['dot'],  // 🟢 Clean, 1 dot per test
  //   ['html', { open: 'never' }]
  //     ],
  
  
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    actionTimeout: 10000,
    navigationTimeout: 15000,
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

