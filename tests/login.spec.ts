import { test, expect, Page } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto("https://demo.applitools.com");
    const emailId = page.locator('#username');
    const password = page.locator('#password');
    const loginButton = page.locator('#log-in');

    await emailId.fill("testing");
    await password.fill("testing@123!");
    await loginButton.click();
    
    const title = await page.title();
    console.log("home page title: ", title);

    await page.screenshot({ path: 'homepage.png' });
    expect(title).toEqual('ACME demo app');
});