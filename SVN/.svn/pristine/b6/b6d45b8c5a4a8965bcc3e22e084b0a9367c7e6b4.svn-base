// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * PlusMagi Site Search — Gutenberg Block tests
 *
 * These tests require WordPress admin credentials.
 * Run with the 'admin' Playwright project:
 *
 *   WP_ADMIN_PASS=secret npx playwright test --project=admin block.spec.js
 *
 * Tests cover:
 *  1. Block type is registered in the REST API
 *  2. Block appears in the Gutenberg block inserter
 *  3. Block can be inserted into a post
 *  4. Block renders a search input preview in the editor
 *  5. Saved post renders the search widget on the frontend
 */

const BLOCK_NAME  = 'plusmagi-site-search/search';
const BLOCK_TITLE = 'PlusMagi Site Search';

// ===========================================================================
// 1. REST API — block registration
// ===========================================================================
test.describe('Block registration — REST API', () => {

    test('block type is registered in /wp/v2/block-types', async ({ request }) => {
        // This endpoint is public for registered block types
        const res = await request.get(`/wp-json/wp/v2/block-types/${BLOCK_NAME}`);
        expect(res.status()).toBe(200);

        const body = await res.json();
        expect(body.name).toBe(BLOCK_NAME);
        expect(body.title).toBe(BLOCK_TITLE);
    });

    test('block type has editorScript registered', async ({ request }) => {
        const res = await request.get(`/wp-json/wp/v2/block-types/${BLOCK_NAME}`);
        const body = await res.json();
        // editor_script_handles is an array; block.json sets editorScript
        const hasScript =
            Array.isArray(body.editor_script_handles) &&
            body.editor_script_handles.length > 0;
        expect(hasScript, 'block should have an editorScript handle').toBe(true);
    });
});

// ===========================================================================
// 2. Gutenberg editor — inserter & render (requires admin auth)
// ===========================================================================
test.describe('Gutenberg editor', () => {

    /**
     * Open the "new post" editor and wait for it to be ready.
     *
     * @param {import('@playwright/test').Page} page
     */
    async function openNewPost(page) {
        await page.goto('/wp-admin/post-new.php', { waitUntil: 'domcontentloaded', timeout: 30_000 });

        // Dismiss the "Welcome to the block editor" modal if present
        const welcomeClose = page.getByRole('button', { name: /close/i }).first();
        if (await welcomeClose.isVisible({ timeout: 3_000 }).catch(() => false)) {
            await welcomeClose.click();
        }

        // Wait until the editor canvas is ready
        await page.locator('.block-editor-writing-flow, .edit-post-visual-editor').waitFor({
            state: 'visible',
            timeout: 20_000,
        });
    }

    test('block appears in the inserter by title', async ({ page }) => {
        await openNewPost(page);

        // Open the block inserter
        await page.getByRole('button', { name: /toggle block inserter/i }).click();

        // Search for the block
        const inserterSearch = page.locator(
            'input[placeholder*="Search"], input[aria-label*="Search"]'
        ).first();
        await inserterSearch.fill(BLOCK_TITLE);

        // Block should appear in the search results list
        const blockItem = page.locator(
            `[role="option"]:has-text("${BLOCK_TITLE}"), ` +
            `button:has-text("${BLOCK_TITLE}"), ` +
            `.block-editor-block-types-list__item-title:has-text("${BLOCK_TITLE}")`
        ).first();
        await expect(blockItem).toBeVisible({ timeout: 10_000 });
    });

    test('block can be inserted into the editor', async ({ page }) => {
        await openNewPost(page);

        // Use the slash command to insert the block quickly
        const canvas = page.locator('.block-editor-writing-flow');
        await canvas.click();
        await page.keyboard.press('Enter');
        await page.keyboard.type('/plusmagi');

        // Autocomplete suggestion should appear
        const suggestion = page.locator(
            `[role="option"]:has-text("${BLOCK_TITLE}"), ` +
            `button:has-text("${BLOCK_TITLE}")`
        ).first();
        await expect(suggestion).toBeVisible({ timeout: 8_000 });
        await suggestion.click();

        // After insertion the block wrapper should be present in the editor
        const blockWrapper = page.locator('.wp-block-plusmagi-site-search-search, .plusmagi-site-search-editor-wrapper');
        await expect(blockWrapper).toBeVisible({ timeout: 8_000 });
    });

    test('block editor preview shows search input (disabled)', async ({ page }) => {
        await openNewPost(page);

        // Insert block via slash command
        await page.locator('.block-editor-writing-flow').click();
        await page.keyboard.press('Enter');
        await page.keyboard.type('/plusmagi');

        const suggestion = page.locator(
            `[role="option"]:has-text("${BLOCK_TITLE}"), button:has-text("${BLOCK_TITLE}")`
        ).first();
        await suggestion.click();

        // The block edit() renders a disabled <input> as a preview
        const previewInput = page.locator('.plusmagi-site-search-editor-wrapper input[disabled]');
        await expect(previewInput).toBeVisible({ timeout: 8_000 });
    });

    test('frontend renders search widget after saving the block', async ({ page }) => {
        await openNewPost(page);

        // Give the post a title so it can be saved
        await page.locator('.editor-post-title__input, h1.wp-block[data-type="core/post-title"]')
            .first()
            .fill('Playwright test — block render');

        // Insert block via slash command
        await page.locator('.block-editor-writing-flow').click();
        await page.keyboard.press('Enter');
        await page.keyboard.type('/plusmagi');
        const suggestion = page.locator(
            `[role="option"]:has-text("${BLOCK_TITLE}"), button:has-text("${BLOCK_TITLE}")`
        ).first();
        await suggestion.click();
        await page.locator('.plusmagi-site-search-editor-wrapper').waitFor({ state: 'visible' });

        // Save / publish the post
        const publishBtn = page.getByRole('button', { name: /publish/i }).first();
        await publishBtn.click();

        // Confirm the "Publish" panel button if it appears (second click)
        const confirmBtn = page.getByRole('button', { name: /^publish$/i });
        if (await confirmBtn.isVisible({ timeout: 3_000 }).catch(() => false)) {
            await confirmBtn.click();
        }

        // Click "View Post" link that appears after publish
        const viewPost = page.getByRole('link', { name: /view post/i });
        await viewPost.waitFor({ state: 'visible', timeout: 15_000 });
        await viewPost.click();

        // Frontend should render the search input from render_callback → render_shortcode()
        await expect(page.locator('#plusmagi-site-search-input')).toBeVisible({ timeout: 15_000 });
    });
});
