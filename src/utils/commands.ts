import { $, browser } from '@wdio/globals';
import LoginPage from '../page-objects/Login.ts';
import NavigationBar from '../page-objects/NavigationBar.ts';

browser.addCommand('getElement', async function (selector: string) {
    return $(selector); // Select element by any valid CSS selector
});

browser.addCommand('getTextOfElement', async function (selector: string) {
    const element = await $(selector); // Select element by any valid selector
    return element.getText(); // Return the text of the element
});

browser.addCommand('verifyIfElementIsDisplayed', async function (selector: string) {
    const element = await $(selector);
    return element.isDisplayed();
});

browser.addCommand('login', async function (username: string, password: string): Promise<void> {
    await LoginPage.open();
    await NavigationBar.navigateToLogin();
    await LoginPage.login(username, password);
});

declare global {
    namespace WebdriverIO {
        interface Browser {
            getElement: (selector: string) => Promise<WebdriverIO.Element>;
            getTextOfElement: (selector: string) => Promise<string>;
            verifyIfElementIsDisplayed: (selector: string) => Promise<boolean>;
            login(username: string, password: string): Promise<void>;
        }
    }
}
