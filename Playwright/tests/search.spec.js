// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * PM Search — UI & functional tests
 *
 * Tests cover:
 *  1. Widget is present and visible
 *  2. Guest (unauthenticated) search returns results
 *  3. Prefix searches: post: / tag: / category:
 *  4. Tab switching in the results dropdown
 *  5. Dropdown closes when clicking outside
 *  6. Short queries (< 2 chars) do not trigger a request
 *  7. REST API endpoint responds correctly
 */

// Selector for the search input added by the plugin
const SEARCH_INPUT = '#PM-search-input';
const SEARCH_RESULT = '#PM-search-results';

test.describe('PM Search — Widget', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the blog home where the widget sidebar is rendered.
        // Use 'domcontentloaded' so we don't wait for slow ad scripts to finish.
        await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60_000 });
        // Dismiss the Google Vignette ad overlay if it appears
        const closeBtn = page.locator('[id^="google_vignette"] button, .dismiss-button, a[aria-label="Close"]');
        if (await closeBtn.count() > 0) {
            await closeBtn.first().click().catch(() => { }); // ignore if it fails
        }
        await page.waitForSelector(SEARCH_INPUT, { state: 'visible', timeout: 15_000 });
    });

    test('search input is visible in sidebar', async ({ page }) => {
        await expect(page.locator(SEARCH_INPUT)).toBeVisible();
    });

    test('scripts are loaded on the page', async ({ page }) => {
        // Check that the plugin's JS was registered by PM (handle name contains 'plusmagi')
        const found = await page.evaluate(() =>
            Array.from(document.scripts)
                .some(s => s.src.includes('PM-search') || s.src.includes('PM_search'))
        );
        expect(found, 'PM-search.js should be enqueued on the page').toBe(true);
    });

    test('PMSearch JS object is defined', async ({ page }) => {
        const obj = await page.evaluate(() => typeof (/** @type {any} */(window)).PMSearch);
        expect(obj, 'PMSearch should be localized on the page').toBe('object');
    });

    test('typing fewer than 2 chars does NOT fire an API request', async ({ page }) => {
        const requests = [];
        page.on('request', req => {
            if (req.url().includes('PM-search/v1/search')) requests.push(req);
        });

        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).type('a', { delay: 50 });
        await page.waitForTimeout(500); // debounce period + margin

        expect(requests.length, 'No REST request for a 1-char query').toBe(0);
        await expect(page.locator(SEARCH_RESULT)).toBeHidden();
    });

    test('typing 2+ chars fires a REST API request', async ({ page }) => {
        let searchRequest = null;
        page.on('request', req => {
            if (req.url().includes('PM-search/v1/search')) searchRequest = req;
        });

        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('jQuery');
        // Wait for the 300 ms debounce + network round-trip
        await page.waitForResponse(
            res => res.url().includes('PM-search/v1/search') && res.status() === 200,
            { timeout: 10_000 }
        );

        expect(searchRequest, 'REST request should have been made').not.toBeNull();
    });

    test('results dropdown appears after typing', async ({ page }) => {
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('jQuery');

        await page.waitForResponse(
            res => res.url().includes('PM-search/v1/search'),
            { timeout: 10_000 }
        );

        // Give the JS time to render the DOM
        await page.waitForTimeout(300);
        await expect(page.locator(SEARCH_RESULT)).toBeVisible();
    });

    test('tabs Posts / Category / Tag are rendered in dropdown', async ({ page }) => {
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('jQuery');

        await page.waitForResponse(
            res => res.url().includes('PM-search/v1/search'),
            { timeout: 10_000 }
        );
        await page.waitForTimeout(300);

        await expect(page.locator('.PM-tab[data-tab="posts"]')).toBeVisible();
        await expect(page.locator('.PM-tab[data-tab="categories"]')).toBeVisible();
        await expect(page.locator('.PM-tab[data-tab="tags"]')).toBeVisible();
    });

    test('clicking a tab switches the visible panel', async ({ page }) => {
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('jQuery');

        await page.waitForResponse(
            res => res.url().includes('PM-search/v1/search'),
            { timeout: 10_000 }
        );
        await page.waitForTimeout(300);

        // Click the Category tab
        await page.locator('.PM-tab[data-tab="categories"]').click();
        await expect(page.locator('#tab-content-categories')).toBeVisible();
        await expect(page.locator('#tab-content-posts')).toBeHidden();
    });

    test('dropdown closes when clicking outside', async ({ page }) => {
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('jQuery');

        await page.waitForResponse(
            res => res.url().includes('PM-search/v1/search'),
            { timeout: 10_000 }
        );
        await page.waitForTimeout(300);

        // Click somewhere neutral (the page heading)
        await page.locator('h1').first().click({ force: true });
        await expect(page.locator(SEARCH_RESULT)).toBeHidden();
    });
});

test.describe('PM Search — Prefix searches', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60_000 });
        await page.waitForSelector(SEARCH_INPUT, { state: 'visible', timeout: 15_000 });
    });

    test('"post:" prefix only fires a post search', async ({ page }) => {
        let url = '';
        page.on('request', req => {
            if (req.url().includes('PM-search/v1/search')) url = req.url();
        });

        const responsePromise = page.waitForResponse(
            res => res.url().includes('PM-search/v1/search'),
            { timeout: 10_000 }
        );
        // click() first to ensure focus — required in Firefox for jQuery's input event
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('post:jQuery');
        await responsePromise;

        expect(url).toContain('term=post%3AjQuery');
    });

    test('"tag:" prefix query resolves successfully', async ({ page }) => {
        // Set up the response waiter BEFORE triggering the request
        const responsePromise = page.waitForResponse(
            res => res.url().includes('PM-search/v1/search') && res.status() === 200,
            { timeout: 10_000 }
        );
        // click() first to ensure focus — required in Firefox for jQuery's input event
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('tag:jQuery');
        const response = await responsePromise;
        expect(response.status()).toBe(200);
    });

    test('"category:" prefix query resolves successfully', async ({ page }) => {
        // Set up the response waiter BEFORE triggering the request
        const responsePromise = page.waitForResponse(
            res => res.url().includes('PM-search/v1/search') && res.status() === 200,
            { timeout: 10_000 }
        );
        // click() first to ensure focus — required in Firefox for jQuery's input event
        await page.locator(SEARCH_INPUT).click();
        await page.locator(SEARCH_INPUT).fill('category:Import');
        const response = await responsePromise;
        expect(response.status()).toBe(200);
    });
});

test.describe('PM Search — REST API', () => {

    test('GET /PM-json/PM-search/v1/search returns 400 without term', async ({ request }) => {
        const res = await request.get('/PM-json/PM-search/v1/search');
        // Without required `term` param the PM REST API returns 400
        expect(res.status()).toBe(400);
    });

    test('GET /PM-json/PM-search/v1/search?term=jQuery returns 200 JSON array', async ({ request }) => {
        const res = await request.get('/PM-json/PM-search/v1/search?term=jQuery');
        expect(res.status()).toBe(200);

        const body = await res.json();
        expect(Array.isArray(body), 'Response should be an array').toBe(true);
    });

    test('each result item has required fields', async ({ request }) => {
        const res = await request.get('/PM-json/PM-search/v1/search?term=jQuery');
        expect(res.status()).toBe(200);

        /** @type {Array<Record<string,unknown>>} */
        const items = await res.json();
        for (const item of items) {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('link');
            expect(item).toHaveProperty('type');
        }
    });

    test('unauthenticated search returns only published posts', async ({ request }) => {
        const res = await request.get('/PM-json/PM-search/v1/search?term=jQuery');
        const items = await res.json();

        const posts = items.filter((/** @type {any} */ i) => i.type === 'post');
        for (const post of posts) {
            expect(post.status, `Post "${post.title}" should be published`).toBe('publish');
        }
    });

    test('1-char term returns 400 (validate_callback rejects it)', async ({ request }) => {
        const res = await request.get('/PM-json/PM-search/v1/search?term=a');
        expect(res.status()).toBe(400);
    });
});
