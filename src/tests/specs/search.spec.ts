import SearchPage from '../../page-objects/Search.ts';
import ProductsPage from '../../page-objects/Products.ts';

describe('Search functionality', () => {

    beforeEach(async () => {
        await browser.login(process.env.USERNAME, process.env.PASSWORD);
    });

    it('should allow the user to search for a product', async () => {
        await SearchPage.searchForProduct('t-shirts');

        // Verify that the searched product name is correct
        const productName = await browser.getTextOfElement(ProductsPage.productNameSelector);
        await expect(productName).toEqual('Faded Short Sleeve T-shirts');

        // Verify that the searched product price is correct
        const productPrice = await browser.getTextOfElement(ProductsPage.productPriceSelector);
        await expect(productPrice).toEqual('$17');

        // Verify that the searched product is out of stock by checking if out of stock selector is visible
        const productStock = await browser.verifyIfElementIsDisplayed(ProductsPage.outOfStockSelector);
        await expect(productStock).toBeTruthy();
    });

});