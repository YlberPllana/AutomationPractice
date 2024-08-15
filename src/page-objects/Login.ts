import Page from './Page.ts';

class LoginPage extends Page {

    emailSelector = '#email';
    passwordSelector = '#passwd';
    loginButtonSelector = '#SubmitLogin';
    errorMessageSelector = '.alert.alert-danger li';

    public async typeEmail(email: string) {
        const emailSelector = await browser.getElement(this.emailSelector);
        await emailSelector.setValue(email);
    }

    public async typePassword(password: string) {
        const passwordSelector = await browser.getElement(this.passwordSelector);
        await passwordSelector.setValue(password);
    }

    public async clickSubmitButton() {
        const loginButton = await browser.getElement(this.loginButtonSelector);
        await loginButton.click();
    }

    public async login(username: string, password: string) {
        await this.typeEmail(username);
        await this.typePassword(password);
        await this.clickSubmitButton();
    }

    public open() {
        return super.open();
    }

}

export default new LoginPage();
