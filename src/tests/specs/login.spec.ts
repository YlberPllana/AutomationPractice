import LoginPage from '../../page-objects/Login.ts';
import NavigationBar from '../../page-objects/NavigationBar.ts';

describe('Login functionality', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await NavigationBar.navigateToLogin();
    });

    it('should display an error message when password is incorrect', async () => {
        await LoginPage.login('ylber@yopmail.com', 'testesttest');

        // Verify that an error message is displayed when password is incorrect
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessageSelector);
        await expect(errorMessage).toEqual('Authentication failed.');
    });

    it('should display an error message when user try to login without entering a username', async () => {
        await LoginPage.clickSubmitButton();

        // Verify that an error message is displayed when user clicks login button without entering a username
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessageSelector);
        await expect(errorMessage).toEqual('An email address required.');
    });

    it('should display an error message when user try to login without entering a password', async () => {
        await LoginPage.typeEmail('ylber@yopmail.com');
        await LoginPage.clickSubmitButton();

        // Verify that an error message is displayed when user clicks login button without entering a password
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessageSelector);
        await expect(errorMessage).toEqual('Password is required.');
    });

    it('should allow the user to login when entering valid credentials', async () => {
        await LoginPage.login(process.env.USERNAME, process.env.PASSWORD);

        // Verify that user is logged in successfully after entering valid credentials by checking its account name
        const accountName = await browser.getTextOfElement(NavigationBar.accountSelector);
        await expect(accountName).toEqual('Ylber Pllana');

        // Verify that user is logged in successfully after entering valid credentials by checking if logout button is displayed
        const signoutButton = await browser.verifyIfElementIsDisplayed(NavigationBar.logoutSelector);
        await expect(signoutButton).toBeTruthy();
    });

});

