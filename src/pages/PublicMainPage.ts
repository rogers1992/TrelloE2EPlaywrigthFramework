import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for Trello's Public Main Page.
 * Provides methods to interact with elements on the main page.
 */
export class PublicMainPage {
    readonly publicMainPage: Page;
    private readonly loginButton : Locator;

    /**
     * Initializes the PublicMainPage with a page instance
     * @param publicMainPage The Playwright page instance
     */
    constructor(publicMainPage: Page) {
        this.publicMainPage = publicMainPage;
        this.loginButton =  this.publicMainPage.getByTestId('login');
    }
    
    /**
     * Navigates to the Trello public main page
     * @param url The URL to navigate to
     */
    async navigateToPublicMainPage(url: string) {
        await this.publicMainPage.goto(url);
    }   

    /**
     * Clicks the Login button on the main page.
     * Uses a specific data-testid locator to avoid strict mode violations.
     */
    async clickLoginButton() {
        // Using data-testid to target the specific login button and avoid strict mode violation
        await this.loginButton.click();
        
    }
}