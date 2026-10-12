import { test, expect } from '@playwright/test';
import { GALLERY_CATEGORIES } from '../src/data/photography';

test('all four curated categories have complete, navigable overviews', async ({ page }) => {
  for (const gallery of Object.values(GALLERY_CATEGORIES)) {
    await page.goto(`/photography/${gallery.slug}`);
    await expect(page.getByRole('heading', { level: 1, name: gallery.name })).toBeVisible();
    await expect(page.getByText(`${gallery.photos.length} photographs`, { exact: true })).toBeVisible();
    const nav = page.getByRole('navigation', { name: 'Photography categories' });
    await expect(nav.getByRole('link')).toHaveCount(4);
    await expect(nav.getByRole('link', { name: gallery.name, exact: true })).toHaveAttribute('aria-current', 'page');
    const links = page.locator('[data-photo]');
    await expect(links).toHaveCount(gallery.photos.length);
    expect(await links.evaluateAll(items => items.map(item => item.getAttribute('data-photo')))).toEqual(gallery.photos.map(photo => photo.fileName));
    for (const photo of gallery.photos) {
      const image = page.locator(`[data-photo="${photo.fileName}"] img`);
      await expect(image).toHaveAttribute('width', String(photo.width));
      await expect(image).toHaveAttribute('height', String(photo.height));
      await expect(image).toHaveAttribute('alt', photo.alt);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  for (const slug of ['does-not-exist', '__proto__', 'constructor']) {
    const response = await page.goto(`/photography/${slug}`);
    expect(response?.status()).toBe(404);
  }
});

test('viewer supports keyboard, focus return, browser history, and shareable links', async ({ page }) => {
  await page.goto('/photography/cityscape');
  const first = page.locator('[data-photo="cityscape/514.webp"]');
  await first.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page).toHaveURL(/#photo=514$/);
  await expect(dialog.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await expect(dialog.getByRole('button', { name: 'Previous', exact: true })).toBeDisabled();
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(/#photo=downside$/);
  await expect(dialog.getByRole('heading')).toHaveText('"ON THE UPSIDE"');
  const currentPhoto = dialog.getByRole('status', { name: 'Current photograph' });
  await expect(currentPhoto).toHaveAttribute('aria-live', 'polite');
  await expect(currentPhoto).toHaveAttribute('aria-atomic', 'true');
  await expect(currentPhoto).toContainText('"ON THE UPSIDE"');
  await expect(currentPhoto).toContainText('2 of 22');
  await page.keyboard.press('ArrowRight');
  await expect(page).toHaveURL(/#photo=palm$/);
  await dialog.getByRole('button', { name: 'Previous', exact: true }).click();
  await expect(page).toHaveURL(/#photo=downside$/);
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
  }
  await dialog.getByRole('button', { name: 'Close', exact: true }).focus();
  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('link', { name: 'Original image', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(first).toBeFocused();
  await expect(page).not.toHaveURL(/#photo=/);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
  await page.goForward();
  await expect(dialog).toBeVisible();
  await expect(page).toHaveURL(/#photo=downside$/);
  await page.goBack();
  await expect(dialog).not.toBeVisible();

  // A shared URL opens directly, and Close stays on the category rather than leaving the site.
  await page.goto('/photography/cityscape#photo=v');
  await expect(dialog.getByRole('heading')).toHaveText('"HOMECOMING"');
  await expect(dialog.getByRole('button', { name: 'Next', exact: true })).toBeDisabled();
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (value: string) => { sessionStorage.setItem('test-copied-photo', value); } } }));
  await dialog.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(dialog.getByRole('status', { name: 'Link sharing' })).toHaveText('Photo link copied.');
  expect(await page.evaluate(() => sessionStorage.getItem('test-copied-photo'))).toBe(page.url());
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Permission denied for acceptance test'); } } }));
  await dialog.getByRole('button', { name: 'Copy link', exact: true }).click();
  await expect(dialog.getByRole('status', { name: 'Link sharing' })).toContainText('Select and copy');
  await expect(dialog.getByLabel('Photo link', { exact: true })).toHaveValue(/#photo=v$/);
  await dialog.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page).toHaveURL(/\/photography\/cityscape$/);
  await page.goto('/photography/cityscape#photo=unknown');
  await expect(dialog).not.toBeVisible();
  await expect(first).toBeVisible();
});

test('portrait photos fit the viewport uncropped and touch browsing works', async ({ page, context }, info) => {
  for (const [category, id] of [['concert', 'carti'], ['concert', 'jpeg'], ['other', 'asher'], ['other', 'budget']]) {
    await page.goto(`/photography/${category}#photo=${id}`);
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const image = dialog.locator('img');
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0), { timeout: 20_000 }).toBe(true);
    const fit = await image.evaluate((element: HTMLImageElement) => {
      const rect = element.getBoundingClientRect();
      return { naturalRatio: element.naturalWidth / element.naturalHeight, fit: getComputedStyle(element).objectFit, top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, height: rect.height, viewportHeight: innerHeight, viewportWidth: innerWidth };
    });
    expect(fit.naturalRatio).toBeCloseTo(2 / 3, 2);
    expect(fit.fit).toBe('contain');
    expect(fit.height).toBeGreaterThan(50);
    expect(fit.top).toBeGreaterThanOrEqual(0);
    expect(fit.bottom).toBeLessThanOrEqual(fit.viewportHeight);
    expect(fit.left).toBeGreaterThanOrEqual(0);
    expect(fit.right).toBeLessThanOrEqual(fit.viewportWidth);
  }
  if (info.project.name === 'phone') {
    const cdp = await context.newCDPSession(page);
    const rect = await page.getByRole('dialog').locator('img').boundingBox();
    expect(rect).toBeTruthy();
    const y = rect!.y + rect!.height / 2;
    const start = rect!.x + rect!.width * .8;
    const end = rect!.x + rect!.width * .2;
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: start, y }] });
    for (let i = 1; i <= 5; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: start + (end - start) * i / 5, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect(page).toHaveURL(/#photo=foe$/);
  }
  await page.screenshot({ path: `.release-evidence/gallery-viewer-${info.project.name}.png`, fullPage: false });
});

test('small screens, large text and unavailable images retain usable controls', async ({ page }, info) => {
  await page.setViewportSize({ width: 320, height: 740 });
  // The interaction depends on the gallery DOM, not background thumbnails or prefetch completion.
  await page.goto('/photography/outside', { waitUntil: 'domcontentloaded' });
  await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator('[data-photo="outside/staring.webp"]').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Close', exact: true })).toBeInViewport();
  await expect(page.getByRole('dialog').getByRole('button', { name: 'Next', exact: true })).toBeInViewport();
  const largeTextImage = await page.getByRole('dialog').locator('img').boundingBox();
  expect(largeTextImage?.height).toBeGreaterThan(50);
  expect(await page.getByRole('dialog').evaluate(element => element.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: `.release-evidence/gallery-320-large-text-${info.project.name}.png`, fullPage: false });
  await page.getByRole('button', { name: 'Close', exact: true }).click();

  await page.route('**/_next/image?**', route => {
    if (new URL(route.request().url()).searchParams.get('url')?.includes('/other/budget.webp')) return route.abort();
    return route.continue();
  });
  await page.goto('/photography/other#photo=budget', { waitUntil: 'domcontentloaded' });
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByText('This preview couldn’t load.', { exact: true })).toBeVisible();
  await expect(dialog.getByRole('link', { name: 'Open the original photograph', exact: true })).toHaveAttribute('href', '/art/photography/other/budget.webp');
  await dialog.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(dialog.getByRole('heading')).toHaveText('"BIG FOE"');
  await expect(dialog.getByText('This preview couldn’t load.')).toHaveCount(0);
});

test('photographs use the viewport with a compact control strip', async ({ page }, info) => {
  test.skip(info.project.name !== 'desktop', 'Explicit viewer viewport matrix runs once.');
  for (const [width, height] of [[1280, 800], [390, 664], [844, 390], [320, 480]]) {
    await page.setViewportSize({ width, height });
    await page.goto('/photography/concert#photo=carti');
    const dialog = page.getByRole('dialog');
    const image = dialog.locator('img');
    await expect(dialog).toBeVisible();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    const layout = await dialog.evaluate(element => {
      const image = element.querySelector('img')!.getBoundingClientRect();
      const footer = element.querySelector('footer')!.getBoundingClientRect();
      return { imageTop: image.top, imageLeft: image.left, imageWidth: image.width, imageHeight: image.height, footerHeight: footer.height, footerBottom: footer.bottom, scrollHeight: element.scrollHeight, width: element.scrollWidth };
    });
    expect(layout.imageTop).toBe(0);
    expect(layout.imageLeft).toBe(0);
    expect(layout.imageWidth).toBe(width);
    expect(layout.imageHeight).toBeGreaterThanOrEqual(height - 80);
    expect(layout.footerHeight).toBeLessThanOrEqual(80);
    expect(layout.footerBottom).toBeLessThanOrEqual(height);
    expect(layout.scrollHeight).toBeLessThanOrEqual(height);
    expect(layout.width).toBeLessThanOrEqual(width);
    for (const label of ['Previous', 'Next', 'Copy link', 'Close']) await expect(dialog.getByRole('button', { name: label, exact: true })).toBeInViewport();
    if (width === 390 || width === 1280) await page.screenshot({ path: `.release-evidence/gallery-immersive-${width}.png` });
  }
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/photography/cityscape');
    const first = page.locator('[data-photo]').first();
    await expect(first).toBeVisible();
    expect((await first.boundingBox())!.y).toBeLessThan(110);
    await page.screenshot({ path: `.release-evidence/gallery-contact-sheet-${width}.png` });
  }
});
