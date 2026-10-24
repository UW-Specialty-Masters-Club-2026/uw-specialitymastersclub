import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', '5187', '--strictPort'], {
  env: { ...process.env, VITE_WP_API_BASE_URL: 'https://events-test.invalid' }, stdio: 'pipe',
});
let browser;
try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Vite did not start')), 20000);
    server.stdout.on('data', (data) => { if (data.toString().includes('ready')) { clearTimeout(timer); resolve(); } });
    server.on('error', reject);
  });
  browser = await chromium.launch({ headless: true, channel: "msedge" });
  const page = await browser.newPage();
  const post = (id, category, metadata = '') => ({
    id, slug: `event-${id}`, date: '2026-01-01T00:00:00', link: `https://example.com/events/${id}`,
    title: { rendered: `Event ${id} &amp; friends` }, excerpt: { rendered: '<p>Workshop summary</p>' },
    content: { rendered: `<img src="https://example.com/poster.png">${metadata}` },
    _embedded: { 'wp:term': [[{ taxonomy: 'category', name: category }]] },
  });
  const marker = (data) => `<div data-smc-marker="event" data-smc-json='${JSON.stringify(data)}'></div>`;
  const records = [post(219, 'Uncategorized'), post(300, 'smc-events', marker({ startAt: '2099-10-26T14:00:00-07:00', location: 'Foster', rsvpUrl: 'https://example.com/rsvp' })), post(301, 'smc-events', marker({ startAt: '2020-10-26T14:00:00-07:00' })), post(302, 'smc-events', marker({ startAt: 'not-a-date', rsvpUrl: 'javascript:alert(1)' })), post(303, 'Other')];
  let mode = 'success';
  await page.route('https://events-test.invalid/**', async (route) => {
    if (mode === 'error') return route.fulfill({ status: 500, body: '{}' });
    const isPosts = route.request().url().includes('/posts');
    return route.fulfill({ json: isPosts && mode === 'success' ? records : [] });
  });
  await page.goto('http://127.0.0.1:5187/events');
  await page.getByRole('heading', { name: 'Upcoming Events', exact: true }).waitFor();
  assert.equal(await page.getByRole('heading', { level: 3 }).count(), 4);
  assert.equal(await page.getByText('Date to be announced', { exact: true }).count(), 2);
  assert.equal(await page.getByRole('link', { name: /RSVP for/ }).count(), 1);
  assert.equal(await page.locator('img[alt="Event 219 & friends poster"]').getAttribute('src'), 'https://example.com/poster.png');
  assert.match(await page.locator('time').first().innerText(), /2:00 PM/);
  await page.setViewportSize({ width: 390, height: 844 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false);
  mode = 'empty'; await page.reload();
  await page.getByText('No events published yet. Check back soon.').waitFor();
  mode = 'error'; await page.reload();
  await page.getByText('Unable to load events from WordPress.').waitFor({ timeout: 30000 });
  mode = 'success'; await page.getByRole('button', { name: 'Try again' }).click();
  await page.getByRole('heading', { name: 'Upcoming Events', exact: true }).waitFor();
  console.log('Events checks passed: post selection, metadata, image fallback, dates, unsafe links, mobile layout, empty/error states and retry.');
} finally {
  await browser?.close();
  server.kill();
}

