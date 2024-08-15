import ProductsPage from '../../page-objects/Products.ts';

describe('Add product to cart', () => {

    beforeEach(async () => {
        await browser.login(process.env.USERNAME, process.env.PASSWORD);
    });

    it('should allow the user to add a product to the cart', async () => {

        await ProductsPage.navigateToWomenCategory();
        await ProductsPage.selectProductInStock();
        await ProductsPage.clickProductByTitle('Blouse');
        await ProductsPage.selectProductColorByName('White');
        await ProductsPage.addProductToCart();
        await browser.pause(2000);

        // Verify that product is successfully added into the cart
        const successfullyAddedToCart = await browser.getTextOfElement(ProductsPage.successMessageSelector);
        await expect(successfullyAddedToCart).toEqual('Product successfully added to your shopping cart');

    });

});

