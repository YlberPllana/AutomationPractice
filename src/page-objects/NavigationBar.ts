import Page from './Page.ts';

class NavigationBar extends Page {

    loginSelector = '.login';
    accountSelector = '.account';
    logoutSelector = '.logout';

    public async navigateToLogin() {
        const loginButton = await browser.getElement(this.loginSelector);
        await loginButton.waitForClickable();
        await loginButton.click();
    }

    public async logout() {
        const logoutButton = await browser.getElement(this.logoutSelector);
        await logoutButton.waitForClickable();
        await logoutButton.click();
    }

};

export default new NavigationBar();