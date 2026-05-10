import { test, expect, Browser, Page, Locator } from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

test('login test', async() =>{
    const myBrowser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const myPage:Page = await myBrowser.newPage();
    await myPage.goto("https://demo.applitools.com");
    const emailId:Locator =  myPage.locator('#username');
    const password:Locator = myPage.locator('#password');
    const loginButton:Locator = myPage.locator('#log-in');

    await emailId.fill("testing")
    await password.fill("testing@123!");
    await loginButton.click();
    
    const title = await myPage.title();
    console.log("home page title: ", title)

    await myPage.screenshot({path: 'homepage.png'});
    expect(title).toEqual('ACME demo app');
    myBrowser.close();
});