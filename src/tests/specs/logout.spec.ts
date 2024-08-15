import LoginPage from '../../page-objects/Login.ts';
import NavigationBar from '../../page-objects/NavigationBar.ts';

describe('Logout functionality', () => {

    beforeEach(async () => {
        await browser.login(process.env.USERNAME, process.env.PASSWORD);
    });

    it('should allow the user to logout after successfully login', async () => {
        await NavigationBar.logout();

        // Verify that user is redirected to login page after logout by checking if login button exist
        const loginButton = await browser.getElement(LoginPage.loginButtonSelector);
        await expect(loginButton).toBeDisplayed();
    });

});