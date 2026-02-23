// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright configuration for PlusMagi Search plugin tests.
 * Target: https://pitt.plusmagi.com  (live WordPress site with plugin installed)
 *
 * Run all tests:      npx playwright test
 * Run with UI:        npx playwright test --ui
 * Show HTML report:   npx playwright show-report
 */
module.exports = defineConfig({
    testDir: './tests',
    timeout: 60_000,

    /* Retry once on CI, never locally */
    retries: process.env.CI ? 1 : 0,

    /* Run tests in parallel by default */
    fullyParallel: true,

    /* Reporter */
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['list'],
    ],

    /* Shared settings for every test */
    use: {
        baseURL: 'https://pitt.plusmagi.com',

        /* Allow up to 60s for any navigation on this ad-heavy live site */
        navigationTimeout: 60_000,
        actionTimeout: 15_000,

        /* Capture screenshot only on failure */
        screenshot: 'only-on-failure',

        /* Record a video only when retrying a failed test */
        video: 'on-first-retry',

        /* Keep traces on failures for debugging */
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
