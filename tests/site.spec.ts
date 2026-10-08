import { createHash } from 'node:crypto';
import { test, expect } from '@playwright/test';

test('home preserves destinations and shows one Inbox Distiller project link', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Lost & Found', exact: true })).toHaveAttribute('href', '/ecommerce#lost-and-found');
  await expect(page.getByRole('link', { name: 'City', exact: true })).toHaveAttribute('href', '/photography/cityscape');
  await expect(page.getByRole('link', { name: 'Mosaic AI', exact: true })).toHaveAttribute('href', 'https://getmosaic.ai');
  const llmLink = page.locator('a[href="https://inboxdistiller.ai"]');
  await expect(llmLink).toHaveText('Inbox Distiller');
  await expect(llmLink.locator('..')).toHaveText('LLM + Jev: Inbox Distiller');
  await expect(page.getByRole('link', { name: /Instacard|Ask-AI/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Inbox Distiller', exact: true })).toHaveCount(1);
  await page.goto('/projects/inbox-distiller');
  await expect(page.getByRole('heading', { name: 'Inbox Distiller', exact: true })).toBeVisible();
  await expect(page.getByText('The public launch preview is under review.', { exact: false })).toBeVisible();
  await page.getByRole('link', { name: 'Back to Alan HG', exact: false }).click();
  await expect(page.getByRole('link', { name: 'Resume', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

test('CV download is the exact owner-supplied PDF', async ({ page, request }) => {
  await page.goto('/');
  const link = page.getByRole('link', { name: 'Resume', exact: true });
  const href = await link.getAttribute('href');
  expect(href).toBe('/cv/Alan_Healey-Greene_CV.pdf');
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');
  const body = await response.body();
  expect(body.subarray(0, 5).toString()).toBe('%PDF-');
  expect(createHash('sha256').update(body).digest('hex')).toBe('a048e4b59ef5649b5bac1a40cec1a67bb49a85306ddcb8eb7739afa2ba310854');
});

test('home fits compact viewports with one row of clearly named contact links', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'Explicit viewport matrix runs once.');
  for (const [width, height] of [[320, 480], [320, 568], [375, 550], [390, 664], [430, 745], [568, 300], [667, 300], [844, 300], [1280, 800]]) {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const links = page.getByRole('navigation', { name: 'Contact and profiles' }).getByRole('link');
    await expect(links).toHaveText(['Email', 'LinkedIn', 'Resume', 'GitHub', 'Substack']);
    const layout = await page.evaluate(() => {
      const contactLinks = [...document.querySelectorAll('.home-links a')];
      return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        links: contactLinks.map(link => {
          const rect = link.getBoundingClientRect();
          return { top: rect.top, bottom: rect.bottom, height: rect.height, width: rect.width };
        }),
        overflow: getComputedStyle(document.body).overflowY,
      };
    });
    expect.soft(layout.width, `${width}x${height} horizontal fit`).toBeLessThanOrEqual(width);
    expect.soft(layout.height, `${width}x${height} vertical fit`).toBeLessThanOrEqual(height);
    expect(layout.overflow).not.toBe('hidden');
    for (const link of layout.links) {
      expect(link.top).toBeCloseTo(layout.links[0].top, 0);
      expect.soft(link.bottom, `${width}x${height} footer fit`).toBeLessThanOrEqual(height);
      expect(link.height).toBeGreaterThanOrEqual(44);
      expect(link.width).toBeGreaterThanOrEqual(44);
    }
    await page.screenshot({ path: `.release-evidence/footer-${width}x${height}.png`, fullPage: true });
  }
});
