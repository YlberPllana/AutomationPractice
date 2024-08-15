import Page from './Page.ts';

class ProductsPage extends Page {

    productSelector = 'add-to-cart-sauce-labs-bolt-t-shirt';
    productNameSelector = '.right-block .product-name';
    productPriceSelector = '.right-block .price.product-price';
    outOfStockSelector = '.out-of-stock';
    inStockSelector = '#uniform-layered_quantity_1';
    womenCategorySelector = '[title="Women"]';
    colorSelector = '#color_8';
    addProductToCartSelector = '#add_to_cart';
    successMessageSelector = 'h2';

    public async addProductToCart() {
        const product = await browser.getElement(this.addProductToCartSelector);
        await product.waitForClickable();
        await product.click();
    }

    public async navigateToWomenCategory() {
        const womenCategory = await browser.getElement(this.womenCategorySelector);
        await womenCategory.waitForClickable();
        await womenCategory.click();
    }

    public async selectProductInStock() {
        const inStock = await browser.getElement(this.inStockSelector);
        await inStock.waitForClickable();
        await inStock.click();
    }

    public async clickProductByTitle(title: string) {
        const productSelector = `.product-name[title="${title}"]`;
        const productElement = await $(productSelector);
        await productElement.waitForClickable({ timeout: 5000 });
        await productElement.click();
    }

    public async selectProductColorByName(name: string) {
        const colorSelector = `a.color_pick[name="${name}"]`;
        const productColor = await $(colorSelector);
        await productColor.waitForClickable({ timeout: 5000 });
        await productColor.click();
    }

    public open() {
        return super.open();
    }

}

export default new ProductsPage();
