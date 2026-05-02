// @ts-check
const { test: setup, expect } = require('@playwright/test');
const path = require('path');

/**
 * Global setup: log in to WordPress admin and save the browser storage state
 * so that tests in the 'admin' project can reuse the authenticated session.
 *
 * Credentials are read from environment variables:
 *   WP_ADMIN_USER  (default: admin)
 *   WP_ADMIN_PASS  (required — test will fail if not set)
 *
 * Run once before the admin test project executes.
 */

const STATE_PATH = path.join(__dirname, 'admin-state.json');

setup('authenticate as WordPress admin', async ({ page }) => {
    const user = process.env.WP_ADMIN_USER || 'admin';
    const pass = process.env.WP_ADMIN_PASS;

    if (!pass) {
        throw new Error(
            'WP_ADMIN_PASS environment variable is required for admin tests.\n' +
            'Run: WP_ADMIN_PASS=yourpassword npx playwright test --project=admin'
        );
    }

    await page.goto('/wp-login.php', { waitUntil: 'domcontentloaded', timeout: 30_000 });

    await page.locator('#user_login').fill(user);
    await page.locator('#user_pass').fill(pass);
    await page.locator('#wp-submit').click();

    // Wait until we land on the Dashboard (/wp-admin/)
    await page.waitForURL('**/wp-admin/**', { timeout: 20_000 });
    await expect(page.locator('#wpadminbar')).toBeVisible();

    // Save cookies + localStorage for reuse in admin tests
    await page.context().storageState({ path: STATE_PATH });
});
