import {Page, Locator} from '@playwright/test';

export abstract class BasePage {
    protected page: Page;
    
    constructor(page: Page) {
        this.page = page;
        
    }
    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async closePage() {
        await this.page.close();
    }
    
}
