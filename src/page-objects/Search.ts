import Page from './Page.ts';

class SearchPage extends Page {

    searchInputFieldSelector = '#search_query_top';
    searchButtonSelector = '[name="submit_search"]';

    public async searchForProduct(clothes: string) {
        const searchInputField = await browser.getElement(this.searchInputFieldSelector);
        await searchInputField.setValue(clothes);
        const searchButton = await browser.getElement(this.searchButtonSelector);
        await searchButton.click();
    }

    public open() {
        return super.open();
    }

}

export default new SearchPage();
